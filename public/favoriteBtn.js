async function getInfo() {
    const response = await fetch('/list-users');
    const favorites = await response.json();
    console.log(favorites)


}

