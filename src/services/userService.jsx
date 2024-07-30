export const getAllUsers = () => {
    return fetch(`http://127.0.0.1:8088/users?_expand=level`).then((res) => res.json())
}

export const getUserById = (id) => {
  return fetch(`http://127.0.0.1:8088/users/${id}`).then((res) => res.json())
}

export const getUserByEmail = (email) => {
    return fetch(`http://127.0.0.1:8088/users?email=${email}`).then((res) =>
      res.json()
    )
  }

  export const createUser = (customer) => {
    return fetch("http://127.0.0.1:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then((res) => res.json())
  }

  export const updateProfile = (id, updatedData) => {
    return fetch(`http://127.0.0.1:8088/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to update Storx with ID ${id}`);
      }
      return response.json();
    });
  };