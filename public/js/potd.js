//potd table is built from file in hbs in app.js
//pulling values from the table to add to the chart on page load
const elements = ['games', 'min', 'pts', 'reb', 'ast', 'fgp', 'ftp'];
const values = [];
for (el in elements){
  values.push(document.getElementById(elements[el]).textContent);
}
minutes = values[1].split(':');
minutes = (parseInt(minutes[0]) + (parseInt(minutes[1])) / 60)
values[1] = minutes;
values[5] = values[5] * 100;
values[6] = values[6] * 100;




//order of labels
//games min pts rebs asst fgp ftp

var ctx = document.getElementById('stats').getContext('2d');

var ctx = document.getElementById('stats');

var myChart = new Chart(ctx, {
  type: 'bar',
    data: {
      labels: ['Games', 'Minutes', 'Points', 'Rebounds', 'Assists', 'FG%', 'FT%'],
      datasets: [{
        fill: false,
          label: 'Player of the Day',
          data: values,
          backgroundColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
    ],
    borderColor: [
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 1)',
    ],
    borderWidth: 2
  }],
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
    myChart.options.scales.xAxes[0].ticks.fontSize = 16;
    myChart.options.legend.labels.fontSize = 16;
  }
}

const query_1 = window.matchMedia("(max-width: 640px)");
mobileFont(query_1);
