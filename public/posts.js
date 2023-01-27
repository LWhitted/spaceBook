
function stringifyFormData(fd) {
    const data = {
        post: fd.get('post'),
        favorites: fd.get('favorites')
    };
    return JSON.stringify(data);
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    console.log(stringified , "did we stri");
    const response = await fetch('/add-post', {
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

const form = document.getElementById('postForm');
form.addEventListener("submit", handleSubmit)

form.addEventListener('click', searchKeyPress)

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode === 13)
  {
      document.getElementById('submitPost').submit();
      return false;
  }
  return true;
}