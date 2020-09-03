const fs = require('fs');
const request = require('request');

//api/v1/season_averages?season=2018&player_ids[]=1

const getMVPSeason = (season, id, name) => {
  const url = 'https://www.balldontlie.io//api/v1/season_averages?season=' +    season + '&player_ids[]=' + id;

  request({url, json:true}, (error, {body : {data}}) => {
    if(error){
      console.log(error);
    } else {
      let to_write = {
        name,
        season,
        games: data[0].games_played,
        min: data[0].min,
        season: data[0].season,
        fgpct: data[0].fg_pct,
        ftpct: data[0].ft_pct,
        reb: data[0].reb,
        ast: data[0].ast,
        pts: data[0].pts
    }
    to_write = JSON.stringify(to_write);
    name = name.split(' ');
    name = name[0];
    fs.writeFile('../../public/json/' + name + '.json', to_write, (err) => {
      if(err) return console.log(err);
      console.log("Written to file");
    })

  }
})
}
//kobe

getMVPSeason(2008, 1043, 'Kobe Bryant');
getMVPSeason(2011, 401, "Derrick Rose");
getMVPSeason(2001, 1037, "Allen Iverson");
getMVPSeason(1994, 540, "Hakeem Olajuwon");