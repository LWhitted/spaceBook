
//Posts for Thoughts 

document.addEventListener("DOMContentLoaded", getInfo);


async function getInfo() {
    const response = await fetch('/list-posts');
    const user = await response.json();
    console.log(user[0].createdAt, "posts")

    

    let htmlString = '';

    for (let i = 0; i < user.length; i++) {
        htmlString += `
<div class="usersPost" >

            <p>${user[i].post}</p>
            <a class="buttons">
                  <input onclick="addFavorites(event)" type="submit" id="${user[i].id}"id="favoriteBtn" value="&#9829;">
                 <button onclick="handleDelete(event), myConfirm(event)" class="remove-post" id=${user[i].id} > Delete </button>
             </a>
             <div id="timestamp" >${Date(user[i].createdAt)}</div>
</div> 


        `
    }

    document.getElementById("savedPosts").innerHTML = htmlString;

console.log("getInfo")

}

// const event = new Date(1993, 6, 28, 14, 39, 7);

// console.log(event.toString());
// // Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// // Note: your timezone may vary

// console.log(event.toDateString());
// // Expected output: "Wed Jul 28 1993"


