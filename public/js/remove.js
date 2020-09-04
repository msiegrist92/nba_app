const removeData = (chart) => {
  //prevent removing of player of the Day data
  if(chart.data.datasets.length == 1){
    return;
  }

  //toggle button colors when that player's data is removed
  removed = chart.data.datasets.pop();
  if(removed.label === "Kobe"){
    document.getElementById('Kobe').classList.toggle('kobe_pale');
  }
  if(removed.label === "DRose"){
    document.getElementById("Derrick").classList.toggle("derrick_pale");
  }
  if(removed.label === "AI"){
    document.getElementById('Allen').classList.toggle("allen_pale");
  }
  if(removed.label === "Dream"){
    document.getElementById("Hakeem").classList.toggle("hakeem_pale");
  }
  chart.update();
}

remove_button = document.getElementById('remove');
remove_button.addEventListener("click", (e) => {
  e.preventDefault();
  removeData(myChart);
})
