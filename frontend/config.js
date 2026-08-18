// ─────────────────────────────────────────────────────────
// ExamGuard — Shared frontend config
// ─────────────────────────────────────────────────────────
// API_BASE is auto-loaded from localStorage. On first run, the user
// is prompted for the Cloudflare URL from Colab Cell 4.

let API_BASE = localStorage.getItem('api_base');

if (!API_BASE) {
  const url = prompt(
    'First-time setup\n\n' +
    'Paste your Cloudflare tunnel URL from Colab Cell 4\n' +
    '(looks like: https://xxxx.trycloudflare.com)'
  );
  if (url) {
    API_BASE = url.trim().replace(/\/$/, '');
    localStorage.setItem('api_base', API_BASE);
  } else {
    API_BASE = 'http://localhost:5000';
  }
}

// Helper for all authenticated requests
const authHeaders = () => ({
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
  'bypass-tunnel-reminder': 'true'
});

// Helper for unauthenticated requests
const baseHeaders = () => ({
  'Content-Type': 'application/json',
  'bypass-tunnel-reminder': 'true'
});

// Auth guard - call at top of protected pages
function requireAuth(allowedRoles) {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!token || !user.name) { location.href = 'login.html'; return null; }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    location.href = `dashboard_${user.role}.html`;
    return null;
  }
  return user;
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('current_exam');
  localStorage.removeItem('last_result');
  location.href = 'login.html';
}
