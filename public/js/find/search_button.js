//main js which adds and determines functionality of search button

const form = document.querySelector('form');
const name_el = document.getElementById("name");
const season_el = document.getElementById('season');
const msg_el = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (myChart.data.datasets.length === 8){
    msg_el.textContent = "Max player count reached";
    return
  }

  //retrieving user input from form
  const search_name = name_el.value;
  const search_season = season_el.value;

  //API request to /name_search
  fetch('/name_search?name=' + search_name).then((response) => {
    response.json().then((data) => {
      if (data.error){

        //display error message in main h1
        msg_el.textContent = data.error;

      } else {

        //make API req to stats_search based on result of /name_search
        fetch('/stats_search?id=' + data.id + '&season=' + search_season).then((response) => {

          response.json().then((data_2) => {
            if (data_2.error){
              msg_el.textContent = data_2.error;
            } else {

              //index selects the appropriate button from buttons and color from colors
              let index = myChart.data.datasets.length;

              //player object is created for passing to setButtonStyles (utils.js)
              let player = {
                label: data.name + ' ' + search_season,
                data: [data_2.games, minsToGraph(data_2.min), data_2.pts, data_2.reb, data_2.ast, data_2.fgp * 100, data_2.ftp * 100],
                color: chooseColor(colors, index),
                fill: false,
                borderWidth: 2
              };

              setButtonStyles(index, player);

              //data from created player object is added to chart datasets array
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
