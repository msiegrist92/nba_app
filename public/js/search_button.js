const form = document.querySelector('form');
const name_el = document.getElementById("name");
const season_el = document.getElementById('season');
const p_name = document.getElementById('p_name');
const p_team = document.getElementById('p_team');
const p_id = document.getElementById('p_id');

const minsToGraph = mins => {
  mins = mins.split(':');
  mins = (parseInt(mins[0]) + (parseInt(mins[1])) / 60)
  return mins
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const search_name = name_el.value;
  const search_season = season_el.value;

  fetch('/name_search?name=' + search_name).then((response) => {
    response.json().then((data) => {
      if (data.error){
        p_name.textContent = data.error;
      } else {
        fetch('/stats_search?id=' + data.id + '&season=' + search_season).then((response) => {
          response.json().then((data_2) => {
            if (data_2.error){
              p_name.textContent = data_2.error;
            } else {
              let player = {
                label: data.name,
                data: [data_2.games, minsToGraph(data_2.min), data_2.pts, data_2.reb, data_2.ast, data_2.fgp * 100, data_2.ftp * 100],
                color: chooseColor(colors, myChart.data.datasets.length),
                fill: false,
                borderWidth: 2
              };
              console.log(player)
              myChart.data.datasets.push(
                {
                  fill: player.fill,
                  label: player.label,
                  data: player.data,
                  backgroundColor: player.color,
                  borderColor: player.color,
                  borderWidth: player.borderWidth
                }
              );
              myChart.update();
            }
          })
        })
      }
    })
  })
})

//set of colors to choose from when adding a new player
//black red blue grey limegrn purple orange yellow
const colors = ['rgb(0,0,0,1)', 'rgb(201, 8, 42, 1)', 'rgb(23, 64, 139, 1)',
  'rgb(158,162,162,1)', 'rgb(120,190,32,1)', 'rgb(120,190,32,1)', 'rgb(229,95,32,1)', 'rgb(249,160,27,1)'];

const chooseColor = (colors, chart_length) => colors[chart_length]

//for appending to datasets
//games min pts reb ast fgp ftp
//fill : false, data, backgroundColor [], borderColor []
