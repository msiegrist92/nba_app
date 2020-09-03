const kobe = document.getElementById("Kobe");
kobe.addEventListener("click", (e) => {
  let kobe_found;
  e.preventDefault();
  for(datasets in myChart.data.datasets){
    if(myChart.data.datasets[datasets].label === "Kobe"){
      kobe_found = true;
    }
  }
  if (kobe_found){
    return
  } else {

    fetch("../json/Kobe.json").then(response => {
      if(!response.ok) {
        throw new Error("HTTP error" + response.status());
      }
      return response.json();
    }).then(json => {
      const data = json;
      minutes = data.min.split(':');
      minutes = (parseInt(minutes[0]) + (parseInt(minutes[1])) / 60)
      const graph_data = [data.games, minutes, data.pts, data.reb, data.ast, data.fgpct * 100, data.ftpct * 100];
      updateChart(kobe, "kobe_pale", "Kobe", graph_data,'rgba(85, 37, 130, .8)');
    })
  }
})
