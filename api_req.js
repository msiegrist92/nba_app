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
const getPlayerStats = (id, season) => {
  const url = 'https://www.balldontlie.io/api/v1/season_averages?season=' + season + '&player_ids[]=' + id
  request({url, json: true}, (error, body) => {
    if (body.body.data.length === 0){
      console.log("There is no data for " + season);
      getPlayerStats(id, season - 1)
    } else {
      console.log(body.body.data);
    }
  })
}

const randomPlayer = () => {
  const playerID = getRandomPlayerID();
  const url = 'https://www.balldontlie.io/api/v1/players/' + playerID;

  request({url, json: true}, (error, {body}) => {
    if (error){
      console.log('error');
    } else {
      console.log(body.first_name + ' ' + body.last_name);
      console.log(body.id);
      getPlayerStats(playerID, 2018)
    }
  })
}

randomPlayer();






//use player id to search for season averages
