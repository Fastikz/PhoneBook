import { fetchApi } from "../api/fetchApi.js";

document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const searchText = document.getElementById("searchText").value;
    const action = "search";

    fetchApi({ action, searchText })
        .then(response => {
            console.log(response);
            displaySearchResults(response);
        })

    const searchInput = document.querySelector('input[name="search"]');
    searchInput.value = "";
});

function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = "";

    if (results.length === 0) {
        searchResultsDiv.innerHTML =`
            <div class="logo">
                <h1>NOTHING FOUND</h1>
            </div>`;
    } else {
        const resultList = document.createElement("ul");
        results.forEach(function (result) {
            const listItem = document.createElement("div");
            listItem.innerHTML =`
                <div class="line">
                    <p> NAME: ${result.name}</p>
                    <p> PHONE: ${result.phone}</p>
                    <p> MAIL: ${result.gmail}</p>
                </div>`;
            resultList.appendChild(listItem);
        });
        searchResultsDiv.appendChild(resultList);
    }
}
