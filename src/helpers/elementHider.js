const allContact = document.getElementById("all__contact");
const getAll = document.getElementById("getAll");
const searchContact = document.getElementById("search__contact");
const search = document.getElementById("searchForm");
const addContact = document.getElementById("add__contact");
const add = document.getElementById("add");
const logo = document.getElementById("home");

logo.addEventListener("click", () =>{
    hideForms();
})

allContact.addEventListener("click", () => {
    hideForms();
    toggleForm(getAll);
});

searchContact.addEventListener("click", () => {
    hideForms();
    toggleForm(search);
});

addContact.addEventListener("click", () => {
    hideForms();
    toggleForm(add);
});

function hideForms() {
    getAll.style.display = "none";
    search.style.display = "none";
    add.style.display = "none";
}

function toggleForm(form) {
    form.style.display = form.style.display === "block" ? "none" : "block";
}