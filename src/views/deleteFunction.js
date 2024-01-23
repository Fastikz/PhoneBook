import { fetchApi } from "../api/fetchApi.js";

document.addEventListener('DOMContentLoaded', function() {
    const outputDiv = document.getElementById('output');

    outputDiv.addEventListener('click', function(event) {
        if (event.target.classList.contains('delet')) {
            const resultDiv = event.target.closest('.line');
            const id = resultDiv.dataset.id;

            fetchApi({
                action: "delete",
                id: id
            })
                .then(response => {
                    if (response === "Date Delete.") {
                        window.alert('DELETED SUCCESSFULLY');
                        window.location.reload();
                    } else {
                        console.error('ERROR:', response);
                    }
                })
                .catch(error => {
                    console.error('ERROR:', error);
                });
        }
    });
});
