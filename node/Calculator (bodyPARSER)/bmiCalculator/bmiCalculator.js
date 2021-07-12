

const express = require('express')
const app = express()
const port = 3000
const bodyParser =  require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', (req, res) => {

  var num1 = parseFloat(req.body.height); // if you didn't specify in the form that this input type is a number, then write it like this:
  var num2 = parseFloat(req.body.weight);// Number(req.body.num)
  var result = num2/(num1*num1);
  res.send("The result of your calculation is " + result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
