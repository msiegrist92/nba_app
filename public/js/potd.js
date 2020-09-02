fetch('/potd').then((response) => {
  response.json().then((data) => {
    document.getElementById("name").textContent = data.first_name + ' ' + data.last_name;
    document.getElementById("team").textContent = data.team;
    const player_id = data.id;
    fetch('/last_avgs?id=' + player_id).then((response) => {
      response.json().then((data) => {
        document.getElementById('season').textContent= data.season;
        document.getElementById('games').textContent= data.games_played;
        document.getElementById('minutes').textContent= data.min;
        document.getElementById('points').textContent= data.pts;
        document.getElementById('rebounds').textContent= data.reb;
        document.getElementById('assists').textContent= data.ast;
        document.getElementById('fgp').textContent= data.fgpct;
        document.getElementById('ftp').textContent= data.ftpct;
      })
    })
  })
})
