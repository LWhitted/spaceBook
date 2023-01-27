console.log("in deletePosts js")

const handleDelete = async (e) => {
    console.log("I made it here")
    e.preventDefault();
        console.log(e.target.id);
        const response = await fetch(`/delete-posts/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: e.target.id }),//only listens to this certain id for the click
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setTimeout(function(){window.location.reload();},10)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
};




// function handleAlert () {
//     const result = confirm('Are you sure you want to delete?');
//     if (result == true) {
//     handleDelete();
// }
// }


// function myConfirm() {

  
//     var result = confirm("Want to delete?");
//     if (result==true) {
//      return true;
//     } else {
//      return false;
//     }
//   }

// document.addEventListener("click", myConfirm)
