export const getAllTypes = () => {
    return fetch(`http://127.0.0.1:8088/types`).then((res) => res.json())
}