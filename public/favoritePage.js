console.log("in favorites page")

document.addEventListener("DOMContentLoaded", addFavorites);


async function addFavorites() {
    const response = await fetch(`/add-favorites/${e.target.id}`);
    const user = await response.json();

let htmlString = '';

for (let i = 0; i < user.length; i++) {
    htmlString += `
    <div class="usersPost" >
    
                <p>${user[i].post}</p>
                 <div id="timestamp" >${user[i].createdAt}</div>
    </div> 
            `
}

document.getElementById("favoritesList").innerHTML = htmlString;

console.log("addFavorites")
}