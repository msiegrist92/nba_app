//contains global var utilities for find.hbs

//contains id names of all added player buttons
const buttons = ['player_1', "player_2", 'player_3', 'player_4',
  'player_5', 'player_6', 'player_7', 'player_8'];

  //set of colors to choose from when adding a new player
  //black red blue grey limegrn purple orange yellow
  const colors = ['rgb(0,0,0,1)', 'rgb(201, 8, 42, 1)', 'rgb(23, 64, 139, 1)',
    'rgb(158,162,162,1)', 'rgb(120,190,32,1)', 'rgb(85,37,130,1)', 'rgb(229,95,32,1)', 'rgb(249,160,27,1)'];

  //returns the color matching index of data in chart
  const chooseColor = (colors, chart_length) => colors[chart_length]

//no buttons are to be displayed upon page load
for (button of buttons){
  document.getElementById(button).style.width = "10%";
}

//converts string 12:30 to int 12.5
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
    "width": "75%"
  }
  Object.assign(element.style, styles)
}
