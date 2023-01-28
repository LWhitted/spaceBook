document.addEventListener("DOMContentLoaded", getInfo);


async function getInfo(e) {
    const response = await fetch('/list-users');
    const user = await response.json();
    const about = user[0]
    console.log(about.name, "user info fetched")

           document.getElementById("profileDisplay").innerHTML = `
    <div class="contactCard" >
            <p>${about.name}</p>
            <p>${about.email}</p>
            <p>${about.hometown}</p>
            <p>${about.about}</p>
    </div>
        `
    }