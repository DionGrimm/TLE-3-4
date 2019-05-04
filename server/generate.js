console.log("-------AI Dummy data generator-------");
let timestamp = Math.round(+new Date()/1000);
let filename = "data/generated/aiData"+timestamp+".json";

content = //Generate data with for loop based on persona's

content = JSON.stringify(content);  
var fs = require('fs');

fs.appendFile(filename, content, function (err) {
  if (err) throw err;

  console.log("Data generated, file saved to: "+ filename);
});
