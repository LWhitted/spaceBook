
function stringifyFormData(fd) {
    const data = {
        username: fd.get('username'),
        userText: fd.get('post'),
        favorites: fd.get('favorites')
    };
    return JSON.stringify(data);
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    console.log(stringified);
    const response = await fetch('/add-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringified,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

const form = document.getElementById('userPost');
form.addEventListener("submit", handleSubmit)