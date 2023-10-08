const BASE_URL = 'http://localhost:8000/api/v1';


// авторизация
export function authorize(username, password) {
    return fetch(`${BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then((res) => {
            if (res.data.username) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data
        })
}