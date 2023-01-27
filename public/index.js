


function stringifyFormData(fd) {
    const data = {
        name: fd.get('name'),
        email: fd.get('email'),
        hometown: fd.get('hometown'),
        about: fd.get('about'),
    };
    return JSON.stringify(data);
}


const handSubmit1 = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    console.log(stringified);
    const response = await fetch('/add-about', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: stringified,
    })
        window.location.href="/posts"
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log('Success:', data);
            
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
};

const form = document.getElementById('profileForm');
form.addEventListener("submit", handSubmit1)





//redirect to posts from profile page function





