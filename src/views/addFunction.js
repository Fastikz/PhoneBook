import { fetchApi } from "../api/fetchApi.js";
document.getElementById("add").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const gmailInput = document.querySelector('input[name="gmail"]');

    if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || gmailInput.value.trim() === '') {
        alert("Please fill out all fields ");
        return;
    } else {
        alert("Contact created");
    }

    const formData = {name: nameInput.value, phone: phoneInput.value, mail: gmailInput.value, action: 'add'}
    console.log(formData)
    fetchApi(formData)
        .then(response => {
            alert("Contact created");

        })

    nameInput.value = "";
    phoneInput.value = "";
    gmailInput.value = "";

});
