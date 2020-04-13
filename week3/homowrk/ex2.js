const fetch = require('node-fetch');

let URL="https://restapiabasicauthe-sandbox.mxapps.io/api/books"

fetch(URL,{ headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }})
.then(nor => nor.json())
.then(json => console.log(json));
