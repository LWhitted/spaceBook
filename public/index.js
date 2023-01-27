


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
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            // window.location.href = "http://localhost:3000/posts";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

const form = document.getElementById('profileForm');
form.addEventListener("submit", handSubmit1)





//redirect to posts from profile page function

form.addEventListener('click', searchKeyPress)

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode === 13)
  {
      document.getElementById('submitBtn').submit();
      return false;
  }
  return true;
}

form.addEventListener('submit', redirect)


function redirect() {
  //look for search id
  let item = document.getElementById("submitBtn").value;
  //redirect page
  window.location.href = "http://localhost:3000/posts";

}



