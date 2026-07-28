import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface WritingFeedback {
  correctedText: string;
  corrections: Array<{
    type: string;
    location: string;
    original: string;
    suggested: string;
    explanation: string;
  }>;
  fluencyScore: number;
  overallNotes: string;
}

/**
 * Review user writing and provide detailed feedback via Claude
 */
export async function reviewUserWriting(
  userText: string,
  prompt: string
): Promise<WritingFeedback> {
  const systemPrompt = `You are an English writing tutor. Review the user's writing and provide:
1. Line-by-line corrections for grammar, spelling, and style
2. Explanation for each correction
3. A fully corrected version of the text
4. An estimated fluency score (0-100)
5. Overall notes and suggestions

Respond in JSON format with this structure:
{
  "correctedText": "...",
  "corrections": [
    {
      "type": "grammar|spelling|style|vocabulary",
      "location": "word or phrase",
      "original": "original text",
      "suggested": "suggested text",
      "explanation": "why this change"
    }
  ],
  "fluencyScore": number,
  "overallNotes": "..."
}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Topic: ${prompt}\n\nUser's text:\n${userText}`,
      },
    ],
  });

  const responseText =
    message.content[0].type === "text" ? message.content[0].text : "";

  try {
    return JSON.parse(responseText);
  } catch {
    throw new Error("Failed to parse Claude response as JSON");
  }
}
