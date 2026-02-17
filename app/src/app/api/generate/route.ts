import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const tonePrompts: Record<string, string> = {
  polite: '丁寧で礼儀正しい',
  casual: 'カジュアルで親しみやすい',
  formal: 'フォーマルでビジネスライクな',
  friendly: 'フレンドリーで温かみのある',
};

export async function POST(request: Request) {
  try {
    const { review, tone = 'polite' } = await request.json();

    if (!review) {
      return NextResponse.json({ error: 'Review is required' }, { status: 400 });
    }

    const toneDescription = tonePrompts[tone] || tonePrompts.polite;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `あなたはEC店舗のカスタマーサポート担当者です。お客様のレビューに対して、${toneDescription}トーンで返信を作成してください。

ルール:
- 日本語で返信する
- 100-200文字程度で簡潔に
- お客様への感謝を含める
- ネガティブなレビューには謝罪と改善の姿勢を示す
- ポジティブなレビューには喜びと今後の利用を促す
- 店舗名は「当店」と表現する`,
        },
        {
          role: 'user',
          content: `以下のレビューに返信してください:\n\n${review}`,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'エラーが発生しました';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('OpenAI error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
