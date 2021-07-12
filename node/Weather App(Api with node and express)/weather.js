const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
  https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=a04bd9d4e3bc8c226cc3f33ab2454350&unit=metric", function(response){
    console.log(response.statusCode);
    response.on("data", function(data){//Check your server. This line of code makes the http API results that u got readable.
      const weatherData= JSON.parse(data);  //this variable is assigned to the data file of the API
      const temp = weatherData.main.temp; //this is how u access stuff from it.
      const icon = weatherData.weather[0].icon;
      const city = weatherData.name;
      const imageURL = "http://openweathermap.org/img/wn/10d@2x.png"
      const description = weatherData.weather[0].description
      res.write("<p>The weather today is "+ description+"</p>");
      res.write("<h1>In " + city+", the temperature is " + temp +"</h1>"); //you can use multiple res.write
      res.write("<img src ="+imageURL+ ">");
      res.send(); //you can use only onse res.send
    })
  })
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.")
})
