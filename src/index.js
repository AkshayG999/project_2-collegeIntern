const express = require('express');
var bodyParser = require('body-parser');
const route = require('./router/route');
const  mongoose  = require('mongoose');

const app = express();

app.use(bodyParser.json());
 

mongoose.connect("mongodb+srv://collegeIntern:MqEho0aLhPlho2em@cluster0.9xvqylt.mongodb.net/project-2", {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDB is connected")}  )
.catch( err => console.log(err))


app.use('/', route);
route.all('/*', function (req, res) { return res.status(400).send({ status: false, msg: "Enter Right URL Path" }) })

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
