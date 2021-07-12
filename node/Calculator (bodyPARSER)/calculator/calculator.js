//to get started command line npm init

const express = require('express')
const app = express()
const port = 3000
const bodyParser =  require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
//These two lines above you're gonna have to write everytime you want to use bodyParser. bodyParser allows you to access stuff for get and post.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
  //Body parser allows you to use req.body which you can use to access inputs
  console.log(req.body);
  //like this
  var num1 = req.body.num1; // if you didn't specify in the form that this input type is a number, then write it like this:
  var num2 = req.body.num2;// Number(req.body.num)
  var result = num1*num2;
  res.send("The result of your calculation is " + result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// npm install body-parser
// What this is going to do is allow use to parse the information we get from our user
