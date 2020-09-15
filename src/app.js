//derrick rose is id 401
//imports
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const page_routers = require('./routers/page_routers.js');
const api_routers = require('./routers/api_routers.js');
const potd_refresh = require('./utils/potd_refresh.js');

const PORT = process.env.PORT || 3000;

//app is created
const app = express();

//define paths
const public_dir = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const json_files = path.join(__dirname, "../public/json");

//configure handlebars
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);


//configure static directory
app.use(express.static(public_dir));

//configure routers
app.use(page_routers);
app.use(api_routers);






//retrives new player of the day from balldontlie api
//saves to ~/public/json/potd.json
// potd_refresh.refresh();
setInterval(potd_refresh.refresh, 300000);




app.listen(PORT, () => {
  console.log("Server is up on port 3000");
})
