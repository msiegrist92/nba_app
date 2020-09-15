const request = require('request');


const getRandomPlayerID = () => Math.floor(Math.random() * 3268) + 1;

//gets stats for most recent season
const getPlayerStats = (id, season, callback) => {
  const url = 'https://www.balldontlie.io/api/v1/season_averages?season=' + season + '&player_ids[]=' + id
  request({url, json: true}, (error, {body : {data}}) => {
    if (!data[0]){
      return getPlayerStats(id, season - 1, callback)
    } else {
      callback(undefined, {
        games: data[0].games_played,
        min: data[0].min,
        season: data[0].season,
        fgpct: data[0].fg_pct,
        ftpct: data[0].ft_pct,
        reb: data[0].reb,
        ast: data[0].ast,
        pts: data[0].pts
      });
    }
  })
}

const randomPlayer = (callback) => {
  const playerID = getRandomPlayerID();
  const url = 'https://www.balldontlie.io/api/v1/players/' + playerID;

  request({url, json: true}, (error, {body}) => {
    if (error){
      callback('error');
    } else if(!body.team) {
      res.send('No team data found for this player please refresh')
    }
     else {
      callback(undefined, {
        first_name : body.first_name,
        last_name: body.last_name,
        id: body.id,
        team: body.team.abbreviation
      })
    }
  })
}

module.exports = {
  randomPlayer: randomPlayer,
  getPlayerStats: getPlayerStats
}
