export const getAllStorx = () => {
    return fetch(`http://127.0.0.1:8088/storx?_expand=type&_expand=user`).then((res) => res.json())
}