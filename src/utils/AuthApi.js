// const BASE_URL = 'http://backend:8000/api/vi';
const BASE_URL = 'http://localhost:8000/api/v1';

// проверка ответа api
// function checkRequest(res) {
//     if (res.ok) {
//         return res.json();
//     }
//     return Promise.reject(`Что-то пошло не так =( Ошибка: ${res.status}`);
// }

// авторизация
export function authorize(email, password) {
    return fetch(`${BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) //ну или какая дата тут приходит User
    })
        // .then(checkRequest)
        .then((res) => {
            if (res.data.email) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data
        })
}