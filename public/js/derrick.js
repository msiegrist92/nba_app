
const derrick = document.getElementById("Derrick");
derrick.addEventListener("click", (e) => {
  e.preventDefault();
  let derrick_found;
  for(datasets in myChart.data.datasets){
    if(myChart.data.datasets[datasets].label === "DRose"){
      derrick_found = true;
    }
  }
  if (derrick_found){
    return
  } else {

    fetch("../json/Derrick.json").then(response => {
      if(!response.ok) {
        throw new Error("HTTP error" + response.status());
      }
      return response.json();
    }).then(json => {
      const data = json;
      minutes = data.min.split(':');
      minutes = (parseInt(minutes[0]) + (parseInt(minutes[1])) / 60)
      const graph_data = [data.games, minutes, data.pts, data.reb, data.ast, data.fgpct * 100, data.ftpct * 100];
      updateChart(derrick, "derrick_pale", "DRose", graph_data,'rgba(206, 17, 65, .8)');
    })
  }
})
