import api from './axios';

// ✅ Extract CSRF token from browser cookie
function getCSRFTokenFromCookie() {
  const match = document.cookie.match(/csrftoken=([\w-]+)/);
  return match ? match[1] : '';
}

// ✅ Use this for secure login
export async function loginUser(email: string, password: string) {
  const csrfToken = getCSRFTokenFromCookie();

  const response = await api.post(
    '/auth/login/',
    { email, password },
    {
      headers: {
        'X-CSRFToken': csrfToken
      }
    }
  );
  return response.data;
}