import { ChatGPTAPIBrowser, getOpenAIAuth } from 'chatgpt';

import dotenv from 'dotenv';
dotenv.config();

async function example() {
  // use puppeteer to bypass cloudflare (headful because of captchas)
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD
  });

  await api.initSession();

  const result = await api.sendMessage('write a random message with 5 words');
  console.log(result.response);
}

await example();