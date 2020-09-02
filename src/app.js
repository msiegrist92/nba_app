//imports
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const randomPlayer = require('./utils/api_req');

//app is created
const app = express();

//define paths
const public_dir = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");

//configure handlebars
app.set('view engine', 'hbs');
app.set('views', views_path);

//configure static directory
app.use(express.static(public_dir));


app.get('', (req, res) => {
  res.render("index", {
    first_name: 'howdy',
    last_name: "pardner"
  })
})

app.get('/potd', (req, res) => {
    console.log('in here');
    randomPlayer((error, body) => {
      if (error){
        res.send({
          error: error
        })} else {
          res.send({
            first_name: body.first_name,
            last_name: body.last_name
          })
        }
      })
    })




app.listen(3000, () => {
  console.log("Server is up on port 3000");
})
