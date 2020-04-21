const express = require('express')
const app = express()
const axios=require('axios')
const exphbs=require("express-handlebars")
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({extended:true})) 

app.post('/weather', (req, res) => {
  const APIKEY = require('./sources/keys.json').API_KEY;
   const cityName= req.body.city_name
   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`)
   .then(function(respns){
     return respns.data
   }).then(function(data){
     const weather_app={
       name:data.name,
       temp:`${data.main.temp} Kelvin`
     }
     console.log(data)
   res.render('index',weather_app)
   }).catch(function(err){
     res.render('index',{ weatherText: "City is not found!" })
   })
})

app.listen(3000)