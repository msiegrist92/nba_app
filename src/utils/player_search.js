const rp = require('request-promise');

const searchById = id =>{

  var options = {
      uri: 'https://www.balldontlie.io/api/v1/players/' + id,
      // qs: {
      //     access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
      // },
      json: true // Automatically parses the JSON string in the response
  };

  rp(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
          console.log(err)
      });
}

const searchByName = name => {
  var options = {
    uri: 'https://www.balldontlie.io/api/v1/players/',
    qs: {
      search: name
    },
    json: true
  }

  rp(options)
    .then((res => {
      data = res.data[0];
        player = {
          id: data.id,
          name: data.first_name + ' ' + data.last_name,
          team: data.team.abbreviation
        }
        console.log(player);
    }))
    .catch((error) => {
      console.log(error)
    })
}


module.exports = {
  searchByName: searchByName,
  searchById: searchById
}
