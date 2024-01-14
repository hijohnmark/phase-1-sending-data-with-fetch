// Add your code here

function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        const newElement = document.createElement("span");
        newElement.textContent = data.id
        const parentElement = document.body
        parentElement.appendChild(newElement)
    })
    .catch(function (error){
        const errorMessage = document.createElement("span")
        errorMessage.textContent = error
        const errorParentElement = document.body
        errorParentElement.appendChild(errorMessage)
    })
};



// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name: userName,
//         email: userEmail,
//     }),
// };

// fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Oopsie daisy!");
//         console.log(error.message);
//     });