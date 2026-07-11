# 🩺 HealthLens

**HealthLens** is a full-stack AI-powered personal health tracking application that helps users monitor their daily health habits, visualize progress, and receive AI-generated health insights based on their lifestyle data.

The application allows users to securely log daily health metrics such as weight, sleep, water intake, exercise, mood, and blood pressure while providing meaningful analytics and personalized recommendations.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- Secure Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes

### 📝 Health Log Management
- Add Daily Health Logs
- View Previous Logs
- Update Existing Logs
- Delete Health Logs

### 📊 Dashboard
- Health Summary Cards
- Weight Trend Visualization
- Average Sleep Analysis
- Water Intake Analysis
- Exercise Statistics
- Latest Mood Tracking

### 🤖 AI Health Assistant
- Personalized Health Summary
- Healthy Habit Analysis
- Areas for Improvement
- AI-powered Recommendations

### 📈 Analytics
- Weight Progress Tracking
- Health Trend Visualization
- Daily Statistics

### 📄 Reports
- Health Report Generation *(Coming Soon)*

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- JavaScript
- CSS
- Axios
- React Router DOM
- Chart.js / Recharts *(depending on implementation)*

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt
- MySQL2
- Express Middleware

## Database
- MySQL

## AI
- Hugging Face Inference API

---

# 📁 Project Structure

```
HealthLens
│
├── client/
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── database/
│   ├── healthlens.sql
│   └── sample_data.sql
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone <repository-url>
cd HealthLens
```

---

## 2. Setup Database

Import the database schema.

```sql
SOURCE database/healthlens.sql;
```

(Optional)

```sql
SOURCE database/sample_data.sql;
```

---

## 3. Configure Environment Variables

### Backend (`server/.env`)

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=healthlens

JWT_SECRET=YOUR_SECRET

HUGGINGFACE_API_KEY=YOUR_API_KEY
```

### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

## 4. Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

## 5. Start the Backend

```bash
cd server
npm run dev
```

---

## 6. Start the Frontend

```bash
cd client
npm run dev
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |

---

## Health Logs

| Method | Endpoint |
|---------|----------|
| POST | `/api/health` |
| GET | `/api/health` |
| GET | `/api/health/:id` |
| PUT | `/api/health/:id` |
| DELETE | `/api/health/:id` |

---

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | `/api/dashboard` |

---

## AI

| Method | Endpoint |
|---------|----------|
| GET | `/api/ai` |

---

# 🔒 Authentication

All protected endpoints require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 🌟 Future Enhancements

- PDF Health Report
- Health Score
- BMI Calculator
- Daily Streak Tracking
- Weekly Progress Report
- Email Notifications
- Cloud Deployment

---

# 👨‍💻 Contributors

- **Korupolu Siri** – Backend Development
- **Bhavana** – Frontend Development

---

# 📜 License

This project is developed for learning, portfolio, and personal use.
