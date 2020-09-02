fetch('/potd').then((response) => {
  response.json().then((data) => {
    document.getElementById("name").textContent = data.first_name + ' ' + data.last_name;
    document.getElementById("team").textContent = data.team;
    const player_id = data.id;
    fetch('/last_avgs?id=' + player_id).then((response) => {
      response.json().then((data) => {
        const table = {
          season: ['season', data.season],
          games: ['games', data.games],
          min: ["min", data.min],
          pts: ["pts", data.pts],
          reb: ["reb", data.reb],
          ast: ['ast', data.ast],
          fgp: ["fgp", data.fgpct],
          ftp: ['ftp', data.ftpct]
        }
        for(prop in table){
          document.getElementById(table[prop][0]).textContent = table[prop][1];
          }
        })
      })
    })
  })
