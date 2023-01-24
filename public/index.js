


// const form = document.getElementById("profileInput")

// const errorElement = document.getElementById('error')

// const name = document.getElementById('formGroupExampleInput');
// const email = document.getElementById('exampleFormControlInput1');
// const hometown = document.getElementById('formGroupExampleInput2');
// const about = document.getElementById('formGroupExampleInput3');
// const btn = document.getElementById('profileSubmit');






document.addEventListener('DOMContentLoaded', getInfo);

async function getInfo() {
    const response = await fetch('http://localhost:3000/');
    const user = await response.json();
    let htmlString = '';

    for (let i = 0; i < user.length; i++) {
        htmlString += `<div class="contactCard">
            <p>${user[i].name}</p>
            <p>${user[i].email}</p>
            <p>${user[i].hometown}</p>
            <p>${user[i].about}</p>
            <button class="remove-contact" id=${user[i].id}> Remove </button>
        </div>`
    }

    document.getElementById("aboutUser").innerHTML = htmlString;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    console.log(stringified);
    const response = await fetch('http://localhost:3000/about', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringified,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

const form = document.getElementById('profileForm');
form.addEventListener("submit", handleSubmit)



//  let userArray = [];

// var profileBtn = document.getElementById('profileBtn');

// function checkBtn(){
  
//     window.location.href('/Users/kristinagiannoutsos/htmlDisplay/about.html')
// }



   





    




