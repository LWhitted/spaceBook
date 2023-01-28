


const addFavoritesHandler = async () => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    console.log(stringified , "did we btn");
    const response = await fetch(`/add-favorites/${e.target.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringified,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            setTimeout(function(){window.location.reload();},10)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

