const BASE_URL = '#';

// проверка ответа api
function checkRequest(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Что-то пошло не так =( Ошибка: ${res.status}`);
}

// авторизация
export function authorize(login, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password }) //ну или какая дата тут приходит User
    })
        .then(checkRequest)
}