const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random')
    .then(nor => nor.json())
    .then(json => console.log(json.value.joke));


  