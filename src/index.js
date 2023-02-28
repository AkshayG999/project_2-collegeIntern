const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')
const route = require('./router/route');
const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT || 3001
const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://client.d2jng35b0yh18v.amplifyapp.com']
}))
app.use(bodyParser.json());
app.use(multer().any())


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
}
).then(() => { console.log("MongoDB is connected") })
    .catch(err => console.log(err))


app.use('/', route);
app.use('/*', function (req, res) { return res.status(400).send({ status: false, msg: "Enter Right URL Path" }) })

app.listen(port, function () {
    console.log('Express app running on port ' + port)
});
