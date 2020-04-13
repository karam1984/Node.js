const fetch = require('node-fetch');


const my =  {
    "name": "karam Doe",
    "numberOfPeople": 2
  };
 
fetch("https://reservation100-sandbox.mxapps.io/api/reservations", {
        method: 'post',
        body:    JSON.stringify(my),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.text())
    .then(text => console.log(text));

