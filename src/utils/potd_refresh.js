const random_player = require('./random_player.js');
const potd = require('./potd.js');

//retrives new player of the day from balldontlie api
//saves to ~/public/json/potd.json
const refresh = () => {
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

module.exports = {
  refresh: refresh
};
