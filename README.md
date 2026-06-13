# 🧪 Prompt Playground

An interactive web app that shows how **prompt engineering** changes the way AI responds — same input, completely different output depending on the mode you pick.

Built for Week 2 of the AI fundamentals course.

---

## 🎯 What It Does

You type anything, pick a mode, and the AI responds in that specific style. It's a hands-on demo of how prompts control AI behavior.

## 🧠 Prompt Modes

| Mode | What it does |
|------|-------------|
| 🧒 Explain Like I'm 5 | Simplifies complex topics into child-friendly language |
| 💼 Professional Rewrite | Makes your text sound polished and formal |
| 📝 Summarize | Condenses long text into key bullet points |
| 🎯 Quiz Generator | Turns any topic into 5 multiple choice questions |
| 🧑‍🏫 Mentor Mode | Gives wise, actionable advice on any topic |
| 📅 Study Plan | Creates a 4-week study plan for any subject |
| 🔥 Friendly Roast | Playfully critiques your idea, then helps you improve it |

## ✨ Features

- 7 prompt modes demonstrating different prompting techniques
- Recent history — click any past prompt to reload it
- Copy response button
- Empty input validation
- Character counter
- Clean, responsive UI

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript (no frameworks)
- **Backend:** Node.js (built-in `http` and `https` modules — no npm needed!)
- **AI:** Groq API (free) running Llama 3.3 70B

## 🚀 How to Run

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/prompt-playground.git
cd prompt-playground
```

### 2. Get a free Groq API key
- Go to [console.groq.com](https://console.groq.com)
- Sign up → API Keys → Create API key
- Copy the key (starts with `gsk_...`)

### 3. Start the server
```bash
node server.js
```

### 4. Open in browser
Go to `http://localhost:3000`, paste your API key, and start prompting!

> No npm install needed — uses only Node.js built-in modules.

## 📁 Project Structure

```
prompt-playground/
├── index.html    ← Frontend (UI + all prompt logic)
├── server.js     ← Backend (proxies API calls to Groq)
└── README.md     ← This file
```

## 💡 What I Learned

This project is a practical demo of **prompt engineering** concepts:
- **Zero-shot prompting** — giving the AI instructions with no examples
- **Role prompting** — telling the AI to act as a mentor, teacher, etc.
- **Output formatting** — instructing the AI to respond in bullet points, multiple choice, etc.
- **Tone control** — same content, completely different style based on the prompt
