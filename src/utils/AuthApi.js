const BASE_URL = 'http://localhost:8000/api/v1';

function checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так =( Ошибка: ${res.status}`);
  }

// авторизация
export function authorize(username, password) {
    return fetch(`${BASE_URL}/auth/token/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(checkRequest)
}

// выход из аккаунта
// export function logout(auth_token) {
//   return fetch(`${BASE_URL}/auth/token/logout/`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${auth_token}`,
//     },
// })
//     .then(checkRequest)
// }