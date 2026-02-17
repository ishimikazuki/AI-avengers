-- AI Crew Database Schema for Supabase

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  company_name TEXT,
  plan TEXT DEFAULT 'starter' CHECK (plan IN ('starter', 'pro', 'enterprise')),
  trial_ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- EC Platforms (connected stores)
CREATE TABLE IF NOT EXISTS public.platforms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  platform_type TEXT NOT NULL CHECK (platform_type IN ('amazon', 'rakuten', 'yahoo', 'shopify', 'base', 'stores')),
  store_name TEXT NOT NULL,
  api_key_encrypted TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  platform_id UUID REFERENCES public.platforms(id) ON DELETE CASCADE,
  external_id TEXT,
  product_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT,
  reply TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'replied', 'skipped')),
  replied_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inventory Items
CREATE TABLE IF NOT EXISTS public.inventory (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  platform_id UUID REFERENCES public.platforms(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  sku TEXT,
  current_stock INTEGER DEFAULT 0,
  threshold INTEGER DEFAULT 10,
  last_checked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inventory Alerts
CREATE TABLE IF NOT EXISTS public.inventory_alerts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  inventory_id UUID REFERENCES public.inventory(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  alert_type TEXT CHECK (alert_type IN ('low_stock', 'out_of_stock', 'restock_recommended')),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reports
CREATE TABLE IF NOT EXISTS public.reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  report_type TEXT CHECK (report_type IN ('daily', 'weekly', 'monthly', 'custom')),
  title TEXT NOT NULL,
  content JSONB,
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI Agent Logs
CREATE TABLE IF NOT EXISTS public.agent_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  agent_type TEXT CHECK (agent_type IN ('review_responder', 'inventory_monitor', 'report_generator')),
  action TEXT NOT NULL,
  details JSONB,
  status TEXT CHECK (status IN ('started', 'completed', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_logs ENABLE ROW LEVEL SECURITY;

-- Policies: Users can only access their own data
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own platforms" ON public.platforms FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own reviews" ON public.reviews FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own inventory" ON public.inventory FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own alerts" ON public.inventory_alerts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own reports" ON public.reports FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own logs" ON public.agent_logs FOR ALL USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON public.reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_status ON public.reviews(status);
CREATE INDEX IF NOT EXISTS idx_inventory_user_id ON public.inventory(user_id);
CREATE INDEX IF NOT EXISTS idx_inventory_alerts_user_id ON public.inventory_alerts(user_id);
CREATE INDEX IF NOT EXISTS idx_reports_user_id ON public.reports(user_id);
CREATE INDEX IF NOT EXISTS idx_agent_logs_user_id ON public.agent_logs(user_id);
