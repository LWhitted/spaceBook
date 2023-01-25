


function stringifyFormData(fd) {
    const data = {
        name: fd.get('name'),
        email: fd.get('email'),
        hometown: fd.get('hometown'),
        about: fd.get('about'),
    };
    return JSON.stringify(data);
}


const handleSubmit = async (e) => {
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
            // location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

const form = document.getElementById('profilePage');
form.addEventListener("submit", handleSubmit)

//redirect to posts from profile page function
form.addEventListener('submit', searchKeyPress)

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode === 13)
  {
      document.getElementById('profilePage').submit();
      return false;
  }
  return true;
}

form.addEventListener('submit', redirect)

// redirect function
function redirect() {
  //look for search id
  var item = document.getElementById("profileSubmit").value;
  //redirect page
  window.location.href = "/posts";

}



