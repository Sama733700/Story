const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
//These two lines above you're gonna have to write everytime you want to use bodyParser. bodyParser allows you to access stuff for get and post.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/weather.html")
})

app.post("/", function(req,res){
    const cityName = req.body.cityName;
  https.get("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=a04bd9d4e3bc8c226cc3f33ab2454350&unit=metric", function(response){
    console.log(response.statusCode);
    response.on("data", function(data){//Check your server. This line of code makes the http API results that u got readable.
      const weatherData= JSON.parse(data);  //this variable is assigned to the data file of the API
      const temp = weatherData.main.temp; //this is how u access stuff from it.
      const icon = weatherData.weather[0].icon;
      const city = weatherData.name;
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
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
