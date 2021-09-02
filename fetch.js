const express = require("express");
const app = express();
const fetch = require("cross-fetch");

function fetchData() {
    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((user) => {
        user.data.forEach(element => {
            console.log("Emails:" + element["email"]);
        });;       
    })
    .catch((err) => {
        console.log('error: ' + err);
    });
}

app.listen(3000, () => {
    var fetchInterval = 5000;
    setInterval(fetchData, fetchInterval);
})