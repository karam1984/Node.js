const express = require('express')
const app = express()
const exphbs=require("express-handlebars")
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({extended:true})) 

app.post('/weather', (req, res) => {
   const cityName= req.body.city_name
   res.render('index',{cityName})
 
})

app.get('/', function (req, res) {
  res.render('index')

})
app.listen(3000)