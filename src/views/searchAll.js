import { fetchApi } from "../api/fetchApi.js";

export const fetchUsersData = () => {
    return fetchApi({ action: "getAll" })
        .then(result => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = "";

            result.forEach(user => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `
                    <div class="line" data-id="${user.id}">
                        <p>NAME: ${user.name}</p>
                        <p>PHONE: ${user.phone}</p>
                        <p>MAIL: ${user.gmail}</p>
                        <button class="delet" id="del">DELETE</button>
                    </div>`;
                outputDiv.appendChild(resultDiv);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

document.getElementById("all__contact").addEventListener("click", () => {
    fetchUsersData();
});