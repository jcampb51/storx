export const postResponse = (response) => {
    return fetch('http://127.0.0.1:8088/responses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
    }).then(res => {
        if (!res.ok) {
            throw new Error('Failed to create response');
        }
        return res.json();
    });
};