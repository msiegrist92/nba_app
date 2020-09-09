//main js which adds and determines functionality of search button

const form = document.querySelector('form');
const name_el = document.getElementById("name");
const season_el = document.getElementById('season');
const msg_el = document.getElementById('msg');

//buttons is a global var
const buttons = ['player_1', "player_2", 'player_3', 'player_4',
  'player_5', 'player_6', 'player_7', 'player_8'];

  //set of colors to choose from when adding a new player
  //black red blue grey limegrn purple orange yellow
  const colors = ['rgb(0,0,0,1)', 'rgb(201, 8, 42, 1)', 'rgb(23, 64, 139, 1)',
    'rgb(158,162,162,1)', 'rgb(120,190,32,1)', 'rgb(85,37,130,1)', 'rgb(229,95,32,1)', 'rgb(249,160,27,1)'];

  const chooseColor = (colors, chart_length) => colors[chart_length]

//no buttons are to be displayed upon page load
for (button of buttons){
  document.getElementById(button).style.display = 'none';
}

const minsToGraph = mins => {
  mins = mins.split(':');
  mins = (parseInt(mins[0]) + (parseInt(mins[1])) / 60)
  return mins
};

//function which sets button styles upon adding data to chart
const setButtonStyles = (index, player) => {
  let element = document.getElementById(buttons[index]);
  element.textContent = player.label;

  let styles = {
    "backgroundColor": player.color,
    "color": "white",
    "display": 'block'
  }

  Object.assign(element.style, styles)
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const search_name = name_el.value;
  const search_season = season_el.value;

  fetch('/name_search?name=' + search_name).then((response) => {
    response.json().then((data) => {
      if (data.error){
        msg_el.textContent = data.error;
      } else {
        fetch('/stats_search?id=' + data.id + '&season=' + search_season).then((response) => {
          response.json().then((data_2) => {
            if (data_2.error){
              msg_el.textContent = data_2.error;
            } else {
              //index selects the appropriate button from buttons and color from colors
              let index = myChart.data.datasets.length;
              let player = {
                label: data.name + ' ' + search_season,
                data: [data_2.games, minsToGraph(data_2.min), data_2.pts, data_2.reb, data_2.ast, data_2.fgp * 100, data_2.ftp * 100],
                color: chooseColor(colors, index),
                fill: false,
                borderWidth: 2
              };
              setButtonStyles(index, player);
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
