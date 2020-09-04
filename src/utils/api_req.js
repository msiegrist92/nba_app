const request = require('request');

//goals
//retrieve a random players
//display stats and info to an hbs template
//style the template
//set script to run every 24 hours as a "player of the day"


//random number for id to return a player
//get info for that player
const getRandomPlayerID = () => Math.floor(Math.random() * 3268) + 1;

//gets stats for most recent season
const getPlayerStats = (id, season, callback) => {
  const url = 'https://www.balldontlie.io/api/v1/season_averages?season=' + season + '&player_ids[]=' + id
  request({url, json: true}, (error, {body : {data}}) => {
    if (data.length === 0){
      getPlayerStats(id, season - 1, callback)
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
  //const playerID = 237;
  const url = 'https://www.balldontlie.io/api/v1/players/' + playerID;

  request({url, json: true}, (error, {body}) => {
    if (error){
      callback('error');
    } else if(!body.team.abbreviation) {
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






//use player id to search for season averages
