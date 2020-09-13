const express = require('express');
const router = new express.Router();
const path = require('path');
const json_files = path.join(__dirname, "../../public/json");
const fs = require('fs');

router.get('', (req, res) => {
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

router.get('/find', (req, res) => {
  res.render('find');
})

router.get('/about', (req,res) => {
  res.render('about');
})

router.get('/help', (req, res) => {
  res.render('help', {
    refresh_timer: 5
  })
})

module.exports = router;
