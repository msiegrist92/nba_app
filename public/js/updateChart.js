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
