import { Configuration, OpenAIApi } from "openai";
import "dotenv/config";
const configuration = new Configuration({
  organization: "org-vaswZDWTt3djxjKOW1Szax6T",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const chatController = async (req, res) => {
  console.log(req.body);

  try {
    const { prompt } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write 5 short sentences up to 6 words about the things we do ${prompt} topic for kids.please include appropriate simple verbs and nouns.
      join them and write a short passage up to 30 words.`,
      max_tokens: 500,
      temperature: 0,
    });
    if (data) {
      if (data.choices[0].text) {
        console.log(typeof data.choices[0].text);
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
};

//
