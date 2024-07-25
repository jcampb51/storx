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

  export const createStorx = (newStorxData) => {
    return fetch(`http://127.0.0.1:8088/storx`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStorxData)
    }).then(response => response.json());
  }

  export const deleteStorx = (storxId) => {
    return fetch(`http://127.0.0.1:8088/storx/${storxId}`, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete storx');
      }
      return response.json();  // Only if your server responds with JSON
    });
  };
  
  