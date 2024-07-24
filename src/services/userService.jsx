export const getAllUsers = () => {
    return fetch(`http://127.0.0.1:8088/users`).then((res) => res.json())
}