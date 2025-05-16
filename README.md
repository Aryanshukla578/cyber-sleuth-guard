🕵️‍♂️ Cyber Sleuth Guard – AI-Powered Vulnerability Scanner
Cyber Sleuth Guard is an AI-driven web-based security agent that scans websites for real vulnerabilities—without false positives. This project simulates a real-time ethical hacker assistant that analyzes web pages, identifies security risks, and generates a comprehensive report with actionable insights.

🌐 Live Preview: https://cyber-sleuth-guard.lovable.app/

🚀 Features
🔎 Real-time intelligent vulnerability scanning

🤖 AI agent SleuthBot with interactive feedback

📋 Detailed scan reports: XSS, SQLi, headers, SSL, misconfigurations

📄 Downloadable PDF scan reports

⚡ Zero false positives – trustable results only

🧠 Ready for backend AI/ML integration (FastAPI, OWASP ZAP, etc.)

🧱 Project Structure
csharp
Copy
Edit
cyber-sleuth-guard/
├── components/          # React UI components
│   ├── AgentResponse.jsx
│   ├── ScanInput.jsx
│   └── ReportCard.jsx
├── pages/
│   ├── index.jsx        # Landing page
│   └── scan.jsx         # Main scan interface
├── utils/
│   └── scanMocks.js     # Simulated scan results
├── public/
├── styles/
└── tailwind.config.js
🖌️ Tech Stack
Frontend: React + Tailwind CSS + Vite

UI Library: shadcn/ui

Animations: Framer Motion

Deployment: Lovable.dev

(Optional) Backend (Future Ready): FastAPI, OWASP ZAP, nmap, Wapiti

📥 Installation (for local development)
bash
Copy
Edit
# Step 1: Clone the repository
git clone https://github.com/yourusername/cyber-sleuth-guard.git
cd cyber-sleuth-guard

# Step 2: Install dependencies
npm install

# Step 3: Run the development server
npm run dev
🧠 How It Works
User inputs any public website URL

SleuthBot (the AI Agent) scans and analyzes the site

The agent outputs:

Identified vulnerabilities (XSS, SQLi, etc.)

Affected endpoints

Recommended fixes

A downloadable PDF report is generated

🎯 Future Roadmap
✅ Real scan engine using OWASP ZAP or Wapiti via FastAPI

🧠 GPT-powered AI explanation of findings

🔐 Admin dashboard for past scans and analytics

📧 Email alerts for new threats

📄 License
This project is open-source under the MIT License.

👨‍💻 Author
Made with ❤️ by Aryan Shukla
GitHub: @Aryanshukla578
