const updateChart = (element, class_toggle, label, data, color) => {
  let background_color = [];
  for(i=0; i<8; i++){
    background_color.push(color);
  }
  let border_color = [];
  for(i=0;i<8;i++){
    border_color.push(color);
  }
  element.classList.toggle(class_toggle);
  myChart.data.datasets.push(
    {
    fill: false,
    label: label,
    data: data,
    backgroundColor: background_color,
    borderColor: border_color,
    borderWidth: 2
  })
  myChart.update();
};

const removePlayer = (player_elem, player_pale, index, dataset, chart) => {
  dataset.splice(index, 1);
  chart.update();
  player_elem.classList.toggle(player_pale)
};

const minsToGraph = mins => {
  mins = mins.split(':');
  mins = (parseInt(mins[0]) + (parseInt(mins[1])) / 60)
  return mins
};

const buttonController = (chart, player_obj) => {
  let player_found;
  let datasets = chart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === player_obj.label){
      player_found = true;
      found_index = datasets.indexOf(dataset);
        removePlayer(player_obj.element, player_obj.pale_class, found_index,  datasets, chart)
    }
  }

  if(!player_found){
    fetch(player_obj.json_path).then(response => {
      if(!response.ok){
        throw new Error("HTTP error" + response.status())
      }
      return response.json()
    }).then(json => {
      minutes = minsToGraph(json.min);
      const graph_data = [json.games, minutes, json.pts, json.reb, json.ast, json.fgpct * 100, json.ftpct * 100];
        updateChart(player_obj.element, player_obj.pale_class, player_obj.label, graph_data, player_obj.chart_color);
    })
  }
}
