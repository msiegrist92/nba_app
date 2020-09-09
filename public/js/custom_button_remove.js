const button_1 = document.getElementById(buttons[0]);

button_1.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_1.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_1.textContent = '';
})

const button_2 = document.getElementById(buttons[1]);

button_2.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_2.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_2.textContent = '';
})

const button_3 = document.getElementById(buttons[2]);

button_3.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_3.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_3.textContent = '';
})

const button_4 = document.getElementById(buttons[3]);

button_4.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_4.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_4.textContent = '';
})

const button_5 = document.getElementById(buttons[4]);

button_5.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_5.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_5.textContent = '';
})

const button_6 = document.getElementById(buttons[5]);

button_6.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_6.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_6.textContent = '';
})

const button_7 = document.getElementById(buttons[6]);

button_7.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_7.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_7.textContent = '';
})

const button_8 = document.getElementById(buttons[7]);

button_8.addEventListener('click', (e) => {
  e.preventDefault();
  let datasets = myChart.data.datasets;
  for(dataset of datasets){
    if(dataset.label === button_1.textContent){
      player_found = true;
      found_index = datasets.indexOf(dataset);
    }
  }
  datasets.splice(found_index, 1);
  myChart.update();
  button_8.textContent = '';
})
