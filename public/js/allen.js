
const allen = document.getElementById("Allen");
allen.addEventListener("click", (e) => {
  e.preventDefault();
  let allen_found;
  for(datasets in myChart.data.datasets){
    if(myChart.data.datasets[datasets].label === "AI"){
      allen_found = true;
    }
  }

  if (allen_found){
    return
  } else {
    fetch("../json/Allen.json").then(response => {
      if(!response.ok) {
        throw new Error("HTTP error" + response.status());
      }
      return response.json();
    }).then(json => {
      const data = json;
      minutes = data.min.split(':');
      minutes = (parseInt(minutes[0]) + (parseInt(minutes[1])) / 60)
      const graph_data = [data.games, minutes, data.pts, data.reb, data.ast, data.fgpct * 100, data.ftpct * 100];
      updateChart(allen, "allen_pale", "AI", graph_data,'rgba(187, 151, 84, .8)');
    })
  }
})
