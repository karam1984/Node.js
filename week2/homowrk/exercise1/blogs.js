const express = require('express');
const app = express();
const fs = require("fs");
app.use(express.json());
app.post('/blogs', (req, res) => {
   
    
    fs.writeFileSync("file.text", `${req.body.title} ${req.body.content}`);
   
    res.end('ok')
})
app.put('/blogs', (req, res) => {
    
    if (fs.existsSync("file.text")) {
        fs.writeFileSync("file.text", `${req.body.title} ${req.body.content}`);
        res.end('ok')
      }
      else {
        res.end('post does not exist');
      }
    
   
    res.end('ok')
})
// app.delete('/blogs', (req, res) => {
//     // How to get the tilte from the url parameters?
//     fs.unlinkSync("file.text");
//     res.end('ok');
// })

app.get('/blogs', (req, res) => {
   
     res.sendfile("file.text");
})



app.listen(3000)

