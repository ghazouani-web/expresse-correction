const express = require("express");
var path = require("path");

const app = express();

//static file
app.use(express.static("public"));
app.use("/image", express.static(__dirname + "public/image"));
app.use("/style", express.static(__dirname + "public/style"));

var requestTime = function (req, res, next) {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  console.log(date);
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 19) {
    res.send("sorry this site cant work");
  } else next();
};
app.use(requestTime);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});

app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/public/Contact.html");
});

app.get("/Services", (req, res) => {
  res.sendFile(__dirname + "/public/Services.html");
});

const port = 5000;
app.listen(port, () => {
  console.log(`the server running on port ${port}`);
});
