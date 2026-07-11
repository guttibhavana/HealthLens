const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

async function generateHealthInsights(healthData) {
 const prompt = `
You are an expert health assistant.

Based on the health data below, provide a response in this exact format:

Overall Health Summary:
...

Good Habits:
- ...
- ...

Areas to Improve:
- ...
- ...

Personalized Recommendations:
- ...
- ...
- ...

Health Data:
${healthData}

Do not include reasoning.
Do not include <think> tags.
Keep the response under 250 words.
`;

  try {
    const completion = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-R1:fastest",
      messages: [
        {
          role: "system",
          content:
            "You are a certified health assistant. Give practical, concise health advice.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1000,
    });

    let text = completion.choices[0].message.content;

// Remove thinking block
text = text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

return text;

    return completion.choices[0].message.content;
  } catch (err) {
    console.error("HF Error:");
    console.error(err);
    throw err;
  }
}



module.exports = {
  generateHealthInsights,
};