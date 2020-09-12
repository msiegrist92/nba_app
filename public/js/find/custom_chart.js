//sets up blank chart for adding custom data
//exports global var myChart

var ctx = document.getElementById('chart').getContext('2d');

var ctx = document.getElementById('chart');

var myChart = new Chart(ctx, {
  type: 'bar',
    data: {
      labels: ['Games', 'Minutes', 'Points', 'Rebounds', 'Assists', 'FG%', 'FT%'],
      datasets: [],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 18
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 22
          }
        }]
      },
      legend : {
        labels : {
          fontSize: 20
        }
      }
    }
  })

//media query to set ticks and label fontsizes for mobile screens
const mobileFont = query_1 => {
  if (query_1.matches){
    myChart.options.scales.yAxes[0].ticks.fontSize = 14;
    myChart.options.scales.xAxes[0].ticks.fontSize = 14;
    myChart.options.legend.labels.fontSize = 16;
  }
}

const query_1 = window.matchMedia("(max-width: 640px)");
mobileFont(query_1);
