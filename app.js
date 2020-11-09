const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv/config');
const cors = require('cors');


let port = process.env.PORT || 3000;

const app = express();



const citaRouter = require('./api/cita/cita.routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api/cita', citaRouter);



app.listen(port, ()=> {
    console.log("server running on port: ",port);
});
