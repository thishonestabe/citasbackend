const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const Cita = require('./api/cita/cita.model')
require('dotenv/config');
const cors = require('cors');


let port = process.env.PORT || 3000;

const app = express();



const citaRouter = require('./api/cita/cita.routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



//app.use('/api/cita', citaRouter);

sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(port, ()=> {
            console.log("server running on port: ",port);
        });
    })
    .catch(err => {
        console.log(err)
    })


