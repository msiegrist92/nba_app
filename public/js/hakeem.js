
const hakeem = document.getElementById("Hakeem");
hakeem.addEventListener("click", (e) => {
  let hakeem_found;
  e.preventDefault();
  for(datasets in myChart.data.datasets){
    if(myChart.data.datasets[datasets].label === "Dream"){
      hakeem_found = true;
    }
  }

  if (hakeem_found){
    return;
  } else {
    fetch("../json/Hakeem.json").then(response => {
      if(!response.ok) {
        throw new Error("HTTP error" + response.status());
      }
      return response.json();
    }).then(json => {
      const data = json;
      minutes = data.min.split(':');
      minutes = (parseInt(minutes[0]) + (parseInt(minutes[1])) / 60)
      const graph_data = [data.games, minutes, data.pts, data.reb, data.ast, data.fgpct * 100, data.ftpct * 100];
      updateChart(hakeem, "hakeem_pale", "Dream", graph_data,'rgba(255,  199,44, .8)');
    })
  }
})
