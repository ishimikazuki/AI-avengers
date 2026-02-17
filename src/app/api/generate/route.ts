import { NextRequest, NextResponse } from 'next/server';

// OpenAI API integration
export async function POST(request: NextRequest) {
  try {
    const { review, tone } = await request.json();

    if (!review) {
      return NextResponse.json(
        { error: 'Review content is required' },
        { status: 400 }
      );
    }

    // TODO: Implement actual OpenAI API call
    // For now, return a mock response
    const toneInstructions: Record<string, string> = {
      formal: '丁寧でフォーマルな敬語を使用',
      friendly: '親しみやすく温かい表現を使用',
      apologetic: 'お詫びと改善への意欲を示す表現を使用',
    };

    const prompt = `あなたはECショップのカスタマーサポート担当者です。以下のレビューに対する返信を作成してください。

トーン: ${toneInstructions[tone] || toneInstructions.formal}

レビュー内容:
${review}

返信の要件:
- 感謝の気持ちを伝える
- レビュー内容に適切に対応する
- 今後の利用を促す
- 200文字以内`;

    // Mock response for demo
    const isPositive = review.includes('良') || review.includes('満足') || review.includes('おすすめ') || review.includes('気に入');
    
    const reply = tone === 'apologetic'
      ? `お客様、この度は貴重なご意見をいただき、誠にありがとうございます。

ご指摘いただいた点について、深くお詫び申し上げます。お客様にご不便をおかけしましたこと、心よりお詫び申し上げます。

いただいたご意見を真摯に受け止め、サービスの改善に努めてまいります。今後とも何卒よろしくお願い申し上げます。`
      : isPositive
      ? `お客様、この度は素敵なレビューをいただき、誠にありがとうございます。

ご満足いただけたようで、スタッフ一同大変嬉しく思っております。お客様のお言葉が私たちの励みになります。

今後とも変わらぬご愛顧のほど、よろしくお願いいたします。またのご利用を心よりお待ちしております。`
      : `お客様、この度は貴重なレビューをいただき、誠にありがとうございます。

ご意見を真摯に受け止め、サービス向上に努めてまいります。お客様により良い体験をお届けできるよう、改善を重ねてまいります。

今後ともどうぞよろしくお願いいたします。`;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Generate error:', error);
    return NextResponse.json(
      { error: 'Failed to generate reply' },
      { status: 500 }
    );
  }
}
