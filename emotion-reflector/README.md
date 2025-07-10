# Emotion Reflection Tool
A simple web app that allows users to submit short text reflections and receive a mock emotional analysis response from a Python backend.

## Project Overview
This project is designed to demonstrate frontend-backend integration using:
- 🧑‍🎨 Next.js (App Router) with TypeScript & Tailwind CSS (Frontend)
- 🐍 FastAPI (Python) for the backend API

## Live
Deployed link: 

## Features
- Mobile-first clean UI with Tailwind CSS
- Responsive input form for text reflections
- Displays mock "emotion" and "confidence" results
- FastAPI backend with a fake emotional analysis
- Graceful loading and error states

## Tech Stack
| Layer      | Tech                                |
|------------|-------------------------------------|
| Frontend   | Next.js (App Router), TypeScript    |
| Styling    | Tailwind CSS                        |
| Backend    | FastAPI (Python 3.8+)               |

## 📁 Folder Structure
emotion-reflector/
│
├── backend/                  # Python backend folder
│   ├── __pycache__/        
│   ├── venv/                 # Virtual environment for Python
│   └── main.py               # FastAPI main app
│
├── .next/                   
├── node_modules/            
├── public/                 
│
├── src/
│   └── app/
│       ├── favicon.ico      
│       ├── globals.css       # Tailwind base styles
│       ├── layout.tsx      
│       └── page.tsx          # Main page component (form, API call, UI)
│   
└── README.md                 # Documentation


## Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AjayGodara2417/emotion-reflector
cd emotion-reflector
```

### 2️⃣ Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv          # Create virtual environment
source venv/bin/activate     # Activate (Linux/macOS)
# venv\Scripts\activate      # Activate (Windows)
```

🐍 FastAPI 
```bash
pip install fastapi uvicorn
```

#### ➕ `main.py` (API Code)

#### ▶️ Run the API

```bash
uvicorn main:app --reload
```
Runs at: `http://127.0.0.1:8000/analyze`


### 3️⃣ Frontend Setup (Next.js + Tailwind)

```bash
cd ../emotion-reflector
npm install
```

## ▶️ Running the Project

### 1. Start the Backend (FastAPI)

```bash
cd backend
uvicorn main:app --reload
```

### 2. Start the Frontend (Next.js)

```bash
npm run dev
```

Open your browser at:
**[http://localhost:3000](http://localhost:3000)**

## 🧪 Test

#### ✅ Input:
```
I feel nervous about my first job interview.
```

#### ✅ Output:
```
Emotion: Anxious
Confidence: 91%
```

## 🧑‍💻 About Me
* Built with ❤️ by Ajay Godara | Web Developer