


const addFavoritesHandler = async (e) => {
    console.log("I made it here")
    e.preventDefault();
        console.log(e.target.id);
        const response = await fetch(`/add-favorites/${e.target.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: e.target.id }),//only listens to this certain id for the click
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




