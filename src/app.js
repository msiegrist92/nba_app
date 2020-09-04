//derrick rose is id 401

//imports
const fs = require('fs');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const api_req = require('./utils/api_req');

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
        name: data[0].name.first_name + ' ' +         data[0].name.last_name,
        team: data[0].name.team,
        season: data[1].stats.season,
        games: data[1].stats.games,
        minutes: data[1].stats.min,
        points: data[1].stats.pts,
        rebounds: data[1].stats.reb,
        assists: data[1].stats.ast,
        fgpct: data[1].stats.fgpct,
        ftpct: data[1].stats.ftpct
      })
    }
  })
})

//response is JSON data containing player's first name, last name and API ID#
app.get('/potd', (req, res) => {
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
          to_write = {name};
          to_write = JSON.stringify(to_write);
          fs.writeFile(json_files + '/potd.json', '[' + to_write + ',', (err) => {
            if(err) return console.log(err);
            console.log("written to potd file");
          })
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
              to_write = {stats};
              to_write = JSON.stringify(to_write);
              fs.appendFile(json_files + '/potd.json', to_write + ']', (err) => {
                if(err) return console.log(err);
                console.log("written to potd file");
              })
        }
      })
    }
  })
});

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
        to_write = {name};
        to_write = JSON.stringify(to_write);
        fs.writeFile(json_files + '/potd.json', '[' + to_write + ',', (err) => {
          if(err) return console.log(err);
          console.log("written to potd file");
        })
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
            to_write = {stats};
            to_write = JSON.stringify(to_write);
            fs.appendFile(json_files + '/potd.json', to_write + ']', (err) => {
              if(err) return console.log(err);
              console.log("written to potd file");
            })
      }
    })
  }
})
};

setInterval(toRefresh, 43200000);





app.listen(3000, () => {
  console.log("Server is up on port 3000");
})
