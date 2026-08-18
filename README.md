# 🎓 ExamGuard — Complete Project (Modules 1–5)

A web-based exam platform with **AI-powered webcam proctoring**, **real-time monitoring**, and **PDF report generation**. Built as a final-year project.

## What's inside

```
examguard/
├── ExamGuard_Backend.ipynb     ← Run this in Google Colab (all 5 modules)
└── frontend/                    ← Open these in your browser
    ├── config.js                ← Shared API URL config
    ├── styles.css               ← Shared design system
    ├── login.html
    ├── register.html
    ├── dashboard_student.html   ← Student home + exam list
    ├── my_results.html          ← 🆕 Student result history + PDF downloads
    ├── dashboard_teacher.html   ← Teacher exam management
    ├── analytics.html           ← 🆕 Charts, KPIs, PDF/CSV downloads
    ├── live_monitor.html        ← Real-time student monitoring
    ├── dashboard_admin.html
    ├── exam.html                ← Timed exam with AI proctoring
    └── result.html              ← Post-exam score + PDF download
```

---

## How to run (5 minutes)

### Step 1 — Backend (Google Colab)

1. Go to [colab.research.google.com](https://colab.research.google.com)
2. **File → Upload notebook** → select `ExamGuard_Backend.ipynb`
3. Run all cells with **Shift+Enter**:
   - Cell 1: Install packages (Flask, OpenCV, fpdf2, etc.)
   - Cell 2: Write `app.py`
   - Cell 3: Start Flask
   - Cell 4: Get public Cloudflare URL — **copy it!**
   - Cell 5: Seed test accounts + realistic exam data (4 students with different scores)
   - Cell 6: Test Module 5 endpoints (downloads sample PDFs)
   - Cell 7: View database

### Step 2 — Frontend

1. Put `frontend/` folder anywhere
2. Open `login.html` → paste Cloudflare URL when prompted

---

## Default test accounts

| Role | Email | Password |
|------|-------|----------|
| Teacher | teacher@test.com | teach123 |
| Student 1 (100%) | alina@test.com | stud123 |
| Student 2 (80%) | bilal@test.com | stud123 |
| Student 3 (80%) | cara@test.com | stud123 |
| Student 4 (0%) | danish@test.com | stud123 |

The seed data (Cell 5) gives you a realistic mix of scores and violations to make the reports look meaningful.

---

## All 5 modules summary

| # | Module | Status |
|---|--------|--------|
| 1 | Authentication (JWT + bcrypt) | ✅ |
| 2 | Exam Management | ✅ |
| 3 | AI Proctoring (OpenCV) | ✅ |
| 4 | Live Monitoring Dashboard | ✅ |
| 5 | Reports & Analytics | ✅ (NEW) |

### Module 5 — Reports & Analytics (NEW)

**For teachers:**
- **Analytics page** with Chart.js visualizations:
  - Score distribution (bar chart)
  - Pass/Fail donut chart
  - Violation types bar
  - Per-question difficulty bars
- **Full class PDF report** — cover page, KPIs, results table, question analysis
- **CSV export** — all results in a spreadsheet format
- **Individual student PDFs** — score + violation timeline per student

**For students:**
- **My Results page** — history of all exams taken with pass/fail status
- **Personal PDF report** for each exam (score + proctoring summary)
- **Download PDF button** on result page after each exam

---

## Testing Module 5 (quick demo)

1. Run all Colab cells (Cell 5 creates 4 students with realistic scores)
2. Login as `teacher@test.com` → sidebar → **📊 Analytics**
3. Pick "Python Basics Quiz" from dropdown
4. You'll see: KPIs (attempts, avg score, pass rate), Chart.js charts, question analysis
5. Click **⬇️ PDF Report** → downloads a nicely formatted PDF
6. Click **⬇️ CSV** → downloads spreadsheet
7. Click 📄 next to any student → individual student PDF

Then login as `alina@test.com` → **🏆 My Results** → download personal PDF.

---

## API endpoints (all 5 modules)

### Module 1 — Auth
- `POST /auth/register`, `POST /auth/login`, `GET /auth/me`

### Module 2 — Exams
- `POST /exam/create`, `POST /exam/{id}/question`
- `GET /exam/list`, `GET /exam/{id}`
- `POST /exam/{id}/submit`, `POST /exam/{id}/toggle`
- `GET /exam/{id}/results`

### Module 3 — AI Proctoring
- `POST /proctor/check` (face detection)
- `POST /proctor/log` (tab switch etc.)
- `GET /proctor/summary/{exam_id}`

### Module 4 — Live Monitoring
- `GET /live/sessions`, `GET /live/snapshot/{exam_id}/{student_id}`
- `GET /live/violations`, `GET /live/stats`
- `POST /live/terminate/{exam_id}/{student_id}`

### Module 5 — Reports (NEW)
- `GET /report/analytics/{exam_id}` — JSON data for charts
- `GET /report/exam/{exam_id}.pdf` — full class PDF
- `GET /report/exam/{exam_id}.csv` — CSV export
- `GET /report/student/{exam_id}/{student_id}.pdf` — student PDF
- `GET /my/results` — student's own history

---

## What's next

- **Module 6**: Deploy to Render + Supabase for permanent URL
- **Future**: Voice detection, head-pose estimation, screen recording, LMS integration
