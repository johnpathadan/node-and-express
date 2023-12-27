const fs = require("fs");

if (!fs.existsSync("./new")) {
  //this means, if the directory does not
  //exist, do the following
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    //rmdir- remove
    if (err) throw err;
    console.log("Directory removed");
  });
}
