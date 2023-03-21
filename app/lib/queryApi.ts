import openai from "@/app/lib/chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  
  const res = await openai.createCompletion({
    model,
    prompt,
    temperature: 0.9, // hight creative: Temperature is a parameter of OpenAI ChatGPT, GPT-3 and GPT-4 models that governs the randomness and thus the creativity of the responses. It is always a number between 0 and 1.
    top_p: 1, // has some control over the randomness of the response, so make sure that it is at its default value of 1
    max_tokens: 1000, //Tokens can be thought of as pieces of words. requests can use up to 4097 tokens shared between prompt and completion.
    frequency_penalty: 0, // Frequency penalty works by lowering the chances of a word being selected again the more times that word has already been used.
    presence_penalty: 0, // Presence penalty does not consider how frequently a word has been used, but just if the word exists in the text.
  })
  .then( res => res.data.choices[0].text )
  .catch(err => `ChatGPT was unable to find an answer for that! (Error: ${err.message})`);
  
  return res;
};

export default query;