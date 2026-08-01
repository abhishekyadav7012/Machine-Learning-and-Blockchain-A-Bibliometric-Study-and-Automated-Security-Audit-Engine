# 🛡️ BlockShield AI — ML & Blockchain Security Platform

> **Machine Learning and Blockchain: A Bibliometric Study on Security and Privacy**

A full-stack AI-powered web application that combines **bibliometric research analysis** with **live blockchain threat detection** using Google Gemini 1.5 Flash. Upload any dataset (CSV, Excel, PDF, JSON) and let AI automatically classify research trends, extract transaction features, and assess fraud risk.

---

## 📸 Features at a Glance

| Section | Description |
|---|---|
| 📂 **Dataset Upload** | Drag & drop CSV / Excel / PDF / JSON — Gemini AI parses and classifies everything automatically |
| 📊 **Research Trends** | Line chart of publication growth, keyword cloud, thematic evolution flow (2015–2024) |
| 🔍 **Threat Scanner** | Enter any wallet address — extracts 14 behavioral ML features for analysis |
| 🛡️ **Risk Indicator** | Needle gauge (0–100), FRAUD/SAFE badge, Explainable AI (XAI) reasoning |

---

## 🧠 Project Background

This project is built as part of a bibliometric study on the intersection of **Machine Learning** and **Blockchain Security**. It covers:

- **Intrusion Detection** — identifying Flash Loan attacks and fraudulent DeFi patterns
- **Rug Pull Detection** — spotting malicious smart contract behavior
- **Anomaly Detection** — flagging suspicious wallet transaction patterns
- **Explainable AI (XAI)** — giving human-readable reasons for every fraud classification

---

## 🏗️ Tech Stack

### Backend
- **Node.js** + **Express** — REST API server
- **Multer** — file upload handling
- **csv-parse** — CSV parsing
- **xlsx** — Excel (.xlsx/.xls) parsing
- **pdf-parse** — PDF text extraction
- **Google Gemini 1.5 Flash API** — AI classification engine

### Frontend
- **Next.js 14** (App Router) — React framework
- **Tailwind CSS** — utility-first styling
- **Recharts** — area charts and line graphs
- **HTML5 Canvas** — custom needle/gauge chart
- **JetBrains Mono + Orbitron** — cyberpunk UI typography

---

## 📁 Project Structure

```
securityandprivacy/
│
├── backend/
│   ├── server.js                   # Express app entry point
│   ├── package.json
│   ├── uploads/                    # Temp storage (auto-cleaned after analysis)
│   ├── routes/
│   │   ├── analyze.js              # POST /api/analyze — wallet address scan
│   │   └── upload.js               # POST /api/upload — file upload & parse
│   └── services/
│       └── geminiService.js        # Gemini AI prompts & response handling
│
└── frontend/
    ├── app/
    │   ├── layout.js               # Root layout + metadata
    │   ├── page.js                 # Main page with tab navigation
    │   └── globals.css             # Cyberpunk theme + animations
    ├── components/
    │   ├── DatasetUploader.jsx     # Drag & drop file upload with progress
    │   ├── ResearchTrends.jsx      # Charts, keyword cloud, evolution flow
    │   ├── ThreatScanner.jsx       # Wallet input + 14-feature grid
    │   └── RiskIndicator.jsx       # Gauge + FRAUD/SAFE badge + XAI
    ├── tailwind.config.js
    └── .env.local
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- npm v9+
- Google Gemini API Key ([get one free here](https://aistudio.google.com/app/apikey))

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/securityandprivacy.git
cd securityandprivacy
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

The Gemini API key is already configured in `backend/services/geminiService.js`. To use your own key, open the file and replace the value of `GEMINI_API_KEY`.

Start the backend:

```bash
node server.js
# or for development with auto-reload:
npx nodemon server.js
```

Backend runs at: **http://localhost:5000**

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm install recharts
npm run dev
```

Frontend runs at: **http://localhost:3000**

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Backend health check |
| `POST` | `/api/upload` | Upload & analyze a dataset file |
| `POST` | `/api/analyze` | Analyze a single wallet address |

### `POST /api/upload`
**Request:** `multipart/form-data` with field `dataset` (CSV / Excel / PDF / JSON, max 20MB)

**Response:**
```json
{
  "success": true,
  "file_name": "transactions.csv",
  "file_type": "CSV",
  "total_records": 284,
  "preview": [ {...}, {...} ],
  "analysis": {
    "dataset_summary": { ... },
    "research_trends": {
      "yearly_data": [ ... ],
      "keywords": [ ... ],
      "thematic_evolution": [ ... ]
    },
    "extracted_features": {
      "mean_value_received": 4.21,
      "total_tx_sent": 312,
      ...
    },
    "risk_assessment": {
      "overall_risk_score": 74,
      "classification": "FRAUD_DOMINANT",
      "dominant_attack": "Flash Loan Attack",
      "explanation": "..."
    }
  }
}
```

### `POST /api/analyze`
**Request:**
```json
{ "address": "0x742d35Cc6634C0532925a3b8D4C9db96590c6C87" }
```

**Response:**
```json
{
  "address": "0x742d...",
  "features": { "mean_value_received": 3.14, ... },
  "result": {
    "risk_score": 82,
    "label": "FRAUD",
    "attack_type": "Rug Pull",
    "explanation": "Flagged due to high variance in received value...",
    "top_features": ["max_val_received", "contract_interactions", "time_diff_first_last"]
  }
}
```

---

## 🤖 How Gemini AI is Used

Gemini 1.5 Flash is the core intelligence engine powering two workflows:

### 1. Dataset Classification (on file upload)
When a file is uploaded, Gemini receives up to 20 rows of data and a structured prompt asking it to return JSON covering all three dashboard sections — research trends, extracted features, and risk assessment — in a single API call.

### 2. Single Wallet Analysis (on address scan)
When a wallet address is entered, the backend generates 14 mock behavioral features and sends them to Gemini. Gemini returns a risk score, fraud label, attack type, and XAI explanation referencing specific feature names.

---

## 📊 The 14 ML Features

These are the behavioral features extracted from blockchain transactions and used for fraud classification:

| Feature | Description |
|---|---|
| `mean_value_received` | Average ETH received per transaction |
| `mean_value_sent` | Average ETH sent per transaction |
| `total_tx_sent` | Total number of outgoing transactions |
| `total_tx_received` | Total number of incoming transactions |
| `unique_sent_to` | Number of unique recipient addresses |
| `unique_received_from` | Number of unique sender addresses |
| `min_val_received` | Minimum value received in a single tx |
| `max_val_received` | Maximum value received in a single tx |
| `min_val_sent` | Minimum value sent in a single tx |
| `max_val_sent` | Maximum value sent in a single tx |
| `time_diff_first_last` | Time span between first and last transaction (hrs) |
| `avg_min_between_tx` | Average minutes between consecutive transactions |
| `erc20_total` | Total ERC-20 token interactions |
| `contract_interactions` | Number of smart contract calls |

---

## 🔐 Attack Patterns Detected

- **Flash Loan Attack** — Large same-block borrows and repayments with abnormal value spikes
- **Rug Pull** — Sudden liquidity drain after contract deployment
- **Phishing** — High unique recipients with low individual transaction values
- **Wash Trading** — Circular transactions between related addresses

---

## 📚 Research Context

This platform supports a bibliometric study that tracks how academic research on ML + Blockchain security has evolved:

| Period | Focus |
|---|---|
| 2015–2016 | Bitcoin privacy and pseudonymity |
| 2017–2018 | Smart contract vulnerability detection |
| 2019–2020 | ML-based intrusion detection on blockchains |
| 2021–2022 | DeFi-specific attack detection (Flash Loans, oracles) |
| 2023–2024 | Explainable AI (XAI) for regulatory compliance |

---

## 🧪 Sample Dataset Format

For best results, upload a CSV with columns matching the 14 features:

```csv
address,mean_value_received,mean_value_sent,total_tx_sent,total_tx_received,...,flag
0xABC...,3.14,1.22,45,38,...,0
0xDEF...,98.7,0.01,312,2,...,1
```

A `flag` column with `1 = FRAUD` and `0 = SAFE` helps Gemini produce more accurate assessments.

---

## 🛠️ Environment Variables

### Backend (`backend/services/geminiService.js`)
The API key is hardcoded directly. To externalize it, create a `.env` file:
```env
GEMINI_API_KEY=your_key_here
PORT=5000
```
Then update `geminiService.js` to use `process.env.GEMINI_API_KEY`.

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

---

## 🚀 Deployment Notes

- For production, move the Gemini API key to an environment variable and never commit it to Git
- Add `.env` and `.env.local` to `.gitignore`
- The `uploads/` folder is auto-cleaned after each request — no persistent file storage needed
- Backend can be deployed to Railway, Render, or any Node.js host
- Frontend can be deployed to Vercel with zero config

---

## 📄 License

This project is for academic and research purposes as part of a bibliometric study on Machine Learning and Blockchain Security.

---

## 👤 Author

**Securityandprivacy Research Project**  
Built with Node.js · Next.js · Google Gemini AI

---

> ⚠️ **Note:** The wallet feature extraction in `/api/analyze` uses mock data generation for demonstration. In production, integrate with the [Etherscan API](https://etherscan.io/apis) to fetch real on-chain transaction data.
