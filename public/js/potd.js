
fetch('/potd').then((response) => {
  response.json().then((data) => {
    document.getElementById("name").textContent = data.first_name + ' ' + data.last_name;
    document.getElementById("team").textContent = data.team;
    const player_id = data.id;
    fetch('/last_avgs?id=' + player_id).then((response) => {
      response.json().then((data) => {
        const table = {
          season: ['season', data.season],
          games: ['games', data.games],
          min: ["min", data.min],
          pts: ["pts", data.pts],
          reb: ["reb", data.reb],
          ast: ['ast', data.ast],
          fgp: ["fgp", data.fgpct],
          ftp: ['ftp', data.ftpct]
        }

        data.min = data.min.split(':');
        data.min = (parseInt(data.min[0])) + (parseInt(data.min[1]) / 60)

        for(prop in table){
          document.getElementById(table[prop][0]).textContent = table[prop][1];
          }

          var ctx = document.getElementById('myChart').getContext('2d');

          var ctx = document.getElementById('myChart');

          const myChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: ['Games', 'Minutes', 'Points', 'Rebounds', 'Assists', 'FG%', 'FT%'],
                  datasets: [{

                      label: 'Player of the Day',
                      data: [data.games, data.min, data.pts, data.reb, data.ast, data.fgpct * 100, data.ftpct * 100],
                      backgroundColor: [
                          'rgba(0, 0, 0, .3)',
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
          const kobe = document.getElementById("Kobe");
          kobe.addEventListener("click", (e) => {
            e.preventDefault();
            kobe.classList.toggle("kobe_pale");
            myChart.data.datasets.push({
              fill: false,
              label: "Kobe",
              data: [82, 36, 26.84, 5.23, 4.87, 46.7, 85.6],
              backgroundColor: [
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
              ],
              borderColor: [
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',
                'rgba(85, 37, 130, .8)',

              ],
              borderWidth: 2
            })
            myChart.update();
            })
          })
          })
          })
        })
