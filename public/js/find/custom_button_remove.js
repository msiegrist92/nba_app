//listeners for all the buttons to remove corresponding data from the chart

const removeData = button_el => {
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_el.textContent){
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_el.textContent = '';
  button_el.style.width = "10%"
}

const addListener = element => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    removeData(element);
  })
}

//adds all button listeners for custom player buttons
for(let i = 0; i<buttons.length; i++){
  addListener(document.getElementById(buttons[i]));
}


//button which removes all data from graph and clears all buttons
document.getElementById('remove').addEventListener('click', () => {

  for (button of buttons){
    if (document.getElementById(button).textContent.length > 0){
      removeData(document.getElementById(button));
    }
  }
  myChart.data.datasets = [];
  myChart.update();

})
