import { BingChat } from "bing-chat-rnz";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const api = new BingChat({
  cookie: process.env.BING_COOKIE,
});

const PORT = process.env.PORT || 3000;

// for console.log
const BINGSRVLOG = "[bing-chat-expressjs]";

app.get("/", (req, res) => {
  res.send(`${BINGSRVLOG} is ready`);
});

app.use("/api", async (req, res) => {
  
  let { prompt, variant } = req.query;

  if (!prompt) {
    return res.send({ error: true, text: "The prompt field is mandatory." });
  }

  variant = variant || process.env.BING_VARIANT || "Creative";

  if (!["Creative", "Balanced", "Precise"].includes(variant)) {
    return res.send({ error: true, text: "Invalid variant." });
  }

  console.log(BINGSRVLOG, { prompt, variant });

  try {
    const ret = await api.sendMessage(prompt, { variant });
    res.json(ret);
    console.log(`${BINGSRVLOG} result:\n`, JSON.stringify(ret, null, 4));
  } catch (err) {
    res.send({ error: err });
    console.error(BINGSRVLOG, err);
  }

})

app.listen(PORT, () => {
  console.log(BINGSRVLOG, `Serve at http://localhost:${PORT}`);
});
