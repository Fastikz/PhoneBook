const fetchApi = (inputData) => {
    return fetch(`/server.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
    })
        .then(response => response.json());
}

export { fetchApi };