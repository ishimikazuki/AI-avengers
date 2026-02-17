import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (extend as needed)
export interface User {
  id: string;
  email: string;
  company_name?: string;
  plan: 'starter' | 'pro' | 'enterprise';
  created_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  platform: string;
  product_name: string;
  rating: number;
  content: string;
  reply?: string;
  status: 'pending' | 'processing' | 'replied';
  created_at: string;
}

export interface InventoryItem {
  id: string;
  user_id: string;
  product_name: string;
  sku: string;
  current_stock: number;
  threshold: number;
  platform: string;
  created_at: string;
}

export interface Report {
  id: string;
  user_id: string;
  type: 'daily' | 'weekly' | 'monthly';
  content: Record<string, unknown>;
  created_at: string;
}
