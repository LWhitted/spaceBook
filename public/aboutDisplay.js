
document.addEventListener("DOMContentLoaded", getInfo);


async function getInfo() {
    const response = await fetch('/list-users');
    const user = await response.json();
    console.log(user, "user info fetched")


    let htmlString = '';

    for (let i = 0; i < user.length; i++) {
        htmlString += `
    <div class="contactCard">
            <p>${user[i].name}</p>
            <p>${user[i].email}</p>
            <p>${user[i].hometown}</p>
            <p>${user[i].about}</p>
    </div>
        `
    }

    document.getElementById("profileDisplayed").innerHTML = htmlString;
}


