
//Posts for Thoughts 

document.addEventListener("DOMContentLoaded", getInfo);


async function getInfo() {
    const response = await fetch('/list-posts');
    const user = await response.json();
    console.log(user, "posts")


    let htmlString = '';

    for (let i = 0; i < user.length; i++) {
        htmlString += `
<div class="usersPost">

            <p>${user[i].post}</p>
            <a class="container">
                  <input type="submit" id="favoriteBtn" value="&#9829;">
                 <button onclick="handleDelete(event)" class="remove-post" id=${user[i].id} > Delete Button </button>
             </a>
</div> 


        `
    }

    document.getElementById("savedPosts").innerHTML = htmlString;

console.log("getInfo")

}


