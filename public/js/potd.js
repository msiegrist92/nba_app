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
                              beginAtZero: true
                          }
                      }]
                  }
                }
              })



//create chart with textcontent of table
//this will allow is to export a global my chart variable
//before the variable was trapped inside the scope of call back functions
//my chart will need to be exported to all button functions
//potd exports table into Chart
//chart exports chart for use in button update chart modules
