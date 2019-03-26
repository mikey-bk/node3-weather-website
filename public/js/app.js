const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    message1.textContent = "Loading...";
    message2.textContent = "";
    fetch(`/weather?address=${encodeURIComponent(location)}`).then((response) => {
        response.json().then(({error, location,forecast} = {}) => {
            if (error) {
                message1.textContent = error;
                message2.textContent = '';
            } else {
                message1.textContent = location;
                message2.textContent = forecast;
            }
        });
    });
});

// fetch('/weather?address=Boston').then((response) => {
//     response.json().then(({error, location,forecast} = {}) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(location)
//             console.log(forecast);
//         }
//     });
// });