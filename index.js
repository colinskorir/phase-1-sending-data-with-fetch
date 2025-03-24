function submitData(name, email) {
    // Create the data object to send
    const data = {
        name: name,
        email: email
    };

    // Define headers as a plain object
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // Explicitly set the Accept header
    };
    console.log('Headers:', headers);

    // Make a POST request to /users
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(object => {
        // Append the new id to the DOM
        const body = document.querySelector('body');
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${object.id}`;
        body.appendChild(idElement);
    })
    .catch(error => {
        // Append the error message to the DOM
        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
    });
}
