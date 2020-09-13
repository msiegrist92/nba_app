const express = require('express');
const rp = require('request-promise');
const router = new express.Router();


router.get('/name_search', (req,res) => {

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

router.get('/stats_search', (req, res) => {

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

module.exports = router;
