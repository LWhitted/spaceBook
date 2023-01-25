
//Posts for Thoughts 


document.addEventListener("DOMContentLoaded", getInfo);


async function getInfo() {
    const response = await fetch('http://localhost:3000/list-posts');
    const user = await response.json();
    console.log(user, "posts")


    let htmlString = '';

    for (let i = 0; i < user.length; i++) {
        htmlString += `
<div class="contactCard">
            <p>${user[i].username}</p>
            <p>${user[i].userText}</p>
          
            <a class="container">
                  <input type="submit" id="favoriteBtn" value= "&#9829;">
             </a>
</div>
        `
    }

    document.getElementById("savedPosts").innerHTML = htmlString;
}


