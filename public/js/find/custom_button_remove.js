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

const button_1 = document.getElementById(buttons[0]);

button_1.addEventListener('click', (event) => {
  event.preventDefault();
  removeData(button_1);
})

const button_2 = document.getElementById(buttons[1]);

button_2.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_2);
})

const button_3 = document.getElementById(buttons[2]);

button_3.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_3);
})

const button_4 = document.getElementById(buttons[3]);

button_4.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_4);
})

const button_5 = document.getElementById(buttons[4]);

button_5.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_5);
})

const button_6 = document.getElementById(buttons[5]);

button_6.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_6);
})

const button_7 = document.getElementById(buttons[6]);

button_7.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_7);
})

const button_8 = document.getElementById(buttons[7]);

button_8.addEventListener('click', (e) => {
  e.preventDefault();
  removeData(button_8);
})
