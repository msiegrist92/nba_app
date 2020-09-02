//derrick rose is id 401

//imports
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const api_req = require('./utils/api_req');

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

//response is JSON data containing player's first name, last name and API ID#
app.get('/potd', (req, res) => {
    api_req.randomPlayer((error, body) => {
      if (error){
        res.send({
          error: error
        })} else {
          res.send({
            first_name: body.first_name,
            last_name: body.last_name,
            team: body.team,
            id: body.id
          })
        }
      })
    });

//setup another URL which sends back JSON data for player's last season averages
app.get('/last_avgs', (req, res) => {
  if(!req.query.id){
    res.send("No id provided");
  }
  api_req.getPlayerStats(req.query.id, 2018, (error, body) => {
    if(error){
      res.send({
        error: error
      })
    } else {
      res.send({
        games_played: body.games_played,
        min: body.min,
        season: body.season,
        minutes: body.minutes,
        fgpct: body.fgpct,
        ftpct: body.ftpct,
        reb: body.ftpct,
        ast: body.ast,
        pts: body.pts
      })
    }
  })
})




app.listen(3000, () => {
  console.log("Server is up on port 3000");
})
