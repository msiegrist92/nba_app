//derrick rose is id 401

//imports
const fs = require('fs');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const api_req = require('./utils/api_req');
const potd = require("./utils/potd")

//app is created
const app = express();

//define paths
const public_dir = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const json_files = path.join(__dirname, "../public/json");

//configure handlebars
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);


//configure static directory
app.use(express.static(public_dir));


app.get('', (req, res) => {
  file = fs.readFile(json_files + '/potd.json', 'utf8', (err, data) => {
    if(err) {
      console.log(err);
    } else {
      data = JSON.parse(data);
      res.render("index", {
        //building potd table with data from JSON file
        name: data[0].first_name + ' ' +         data[0].last_name,
        team: data[0].team,
        season: data[1].season,
        games: data[1].games,
        minutes: data[1].min,
        points: data[1].pts,
        rebounds: data[1].reb,
        assists: data[1].ast,
        fgpct: data[1].fgpct,
        ftpct: data[1].ftpct
      })
    }
  })
})


//retrives new player of the day from balldontlie api
//saves to ~/public/json/potd.json
const toRefresh = () => {
  api_req.randomPlayer((error, body) => {
    if (error){
      res.send({
        error: error
      })} else {
        let name = {
          first_name: body.first_name,
          last_name: body.last_name,
          team: body.team,
          id: body.id
        }
        potd.writeStart(name);
        console.log(name.id);
        api_req.getPlayerStats(name.id, 2018, (error, body) => {
          if(error){
            res.send({
              error: error
            })
          } else {
            let stats = {
              games: body.games,
              min: body.min,
              season: body.season,
              minutes: body.minutes,
              fgpct: body.fgpct,
              ftpct: body.ftpct,
              reb: body.ftpct,
              ast: body.ast,
              pts: body.pts
            }
            potd.writeEnd(stats);
      }
    })
  }
})
};

// setInterval(toRefresh, 5000);
// toRefresh();




app.listen(3000, () => {
  console.log("Server is up on port 3000");
})
