const express = require('express')
const request = require("request")
const bodyParser =  require("body-parser");
const app = express()
const https = require("https");
// In order for node to be able to load up static files like CSS and Bootstrap it needs this function:
app.use(express.static("public"));// You can name the parenthesis (public) anything u want. This is going to be a folder that you create.
// You are going to put all your static CSS and images in that folder.
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})


app.post('/', (req, res) => {
  //Body parser allows you to use req.body which you can use to access inputs
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members:{// Check lecture249 at 7 minutes.
        email_address: email,
        status: "subscibed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    };
    const jsonData =  JSON.stringify(data);
    const options ={
      method: "POST",
      auth: "sama1:2aba9c5b4413ef9732bb364c630311cc-us6" // here you put your api key after the colon.
    }
    const request = https.request("http://us6.api.mailchimp.com/3.0/lists/3004017791", options, function(response){// after lists/ you put ur list id
        // In the end of your API key, there! is a number after -us. Add this number in the us up above the exclamation mark.
        response.on("data", function(data){
        console.log(JSON.parse(data));
    });
  });

    request.write(jsonData);
    request.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//API key. You get this from Mailchimp.
//2aba9c5b4413ef9732bb364c630311cc-us6

//list id. You get this from Mailchimp. in the dashboard you'll see something called Audience. then All contacts. Cureent Audienece Audience name and default. You'll find the list Id under Audience Id
//3004017791
