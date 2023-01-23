async function getInfo() {
    const response = await fetch('http://localhost:3000/list-users');
    const favorites = await response.json();
    console.log(favorites)


}

