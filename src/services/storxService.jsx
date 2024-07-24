export const getAllStorx = () => {
    return fetch(`http://127.0.0.1:8088/storx?_expand=type&_expand=user`).then((res) => res.json())
}

export const updateStorx = (id, updatedData) => {
    return fetch(`http://127.0.0.1:8088/storx/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    }).then(response => response.json());
  }