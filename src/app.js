//derrick rose is id 401

//imports
const fs = require('fs');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const random_player = require('./utils/random_player');
const potd = require("./utils/potd")
const search = require("./utils/player_search")
const rp = require('request-promise');

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

app.get('/find', (req, res) => {
  res.render('find');
})

app.get('/name_search', (req,res) => {

  if(!req.query.name){
    res.send("No name provided");
  }

  var options = {
    uri: 'https://www.balldontlie.io/api/v1/players?search=' + req.query.name,
    json: true
  }

  rp(options)
    .then((body) => {

      if(!body.data[0]){
        const error = {
          error: 'No data for this player'
        }
        res.send(error)
      } else {

        data = body.data[0];
          const player = {
            id: data.id,
            name: data.first_name + ' ' + data.last_name,
            team: data.team.abbreviation
          }
          res.send(player)
        }
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get('/stats_search', (req, res) => {

  var options = {
    uri: 'https://www.balldontlie.io/api/v1/season_averages?season=' + req.query.season + '&player_ids[]=' + req.query.id,
    json: true
  }

  rp(options)
    .then((body) => {

      if(!body.data[0]){
        const error = {
          error: 'No data for this season'
        }
        res.send(error)
      } else {
        data = body.data[0];
        const stats = {
          games: data.games_played,
          min: data.min,
          pts: data.pts,
          reb: data.reb,
          ast: data.ast,
          fgp: data.fg_pct,
          ftp: data.ft_pct
        }
        res.send(stats)
        }
    })
    .catch((error) => {
      console.log(error)
    })
})


//retrives new player of the day from balldontlie api
//saves to ~/public/json/potd.json
const toRefresh = () => {
  random_player.randomPlayer((error, body) => {
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
        random_player.getPlayerStats(name.id, 2018, (error, body) => {
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
