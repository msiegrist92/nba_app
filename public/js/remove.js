const removeData = (chart) => {
    chart.data.datasets.pop();

    chart.update();
}

remove_button = document.getElementById('remove');
remove_button.addEventListener("click", (e) => {
  e.preventDefault();
  removeData(myChart);
})
