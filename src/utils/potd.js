const fs = require('fs');
const path = require('path')
const json_files = path.join(__dirname, "../../public/json");

//two separate pieces of data are received from api
//they are then formatted into one JSON object

const writeStart = to_write => {
  to_write = JSON.stringify(to_write);
  fs.writeFile(json_files + '/potd.json', '[' + to_write + ',', (err) => {
    if(err) return console.log(err);
    console.log("written to potd file");
  })
}

const writeEnd = to_write => {
  to_write = JSON.stringify(to_write);
  fs.appendFile(json_files + '/potd.json', to_write + ']', (err) => {
    if(err) return console.log(err);
    console.log("written to potd file");
  })
}



module.exports = {
  writeStart: writeStart,
  writeEnd: writeEnd
}
