const Client = require('./client.model');
const Cita = require('../cita/cita.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
require('dotenv/config');
exports.login = async (req, res, next) => {
    // let error = Validations.loginValidation(req.body);
    // if(error) return res.status(400).send(error);

    try {
        let user = await Client.findOne({ where:
                {
                    email: req.body.email
                }
        });

        if(!user) return res.status(400).send('Invalid Credentials');
        const validPass = await bcrypt.compare(req.body.password, user.password)
        if(!validPass) return res.status(400).send('Invalid Credentials')

        const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send(token)
    } catch(e)  {
        console.log("e inside login", e);
    }


};

exports.register = async (req, res, next) => {
    // let error = Validations.registerValidation(req.body);
    let checkEmail = await Client.findOne({ where:
    {
        email: req.body.email
    }
});
    if (checkEmail) return res.status(400).send('Email Already exists');
    // if(!error) {

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            phone: req.body.phone
        }
        try {
            const savedUser = await Client.create(user);
            res.json({user:savedUser.name});
        }catch (e) {
            res.status(400).send(e);
        }
    // } else {
    //     res.status(400).send(error);
    // }
}

exports.logout = async (req, res, next) => {

    const token = ''
    res.header('auth-token', token).send('User Logged Out');

};

exports.activeAppoinment = async (req, res, next) => {

    try {
        //res.send(req.user)
        let cita = await Cita.findAll({ where:
                {
                    [Op.and]: [
                        {clientId: req.user},
                        {status: 'open'},
                    ]

                }
        });

        if(cita.length === 0){
            res.send('No active appointments')
        } else {
            res.send(cita);
        }


    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    }


}

exports.allAppointments = async (req, res, next) => {

}

exports.getAvailableAppointmentsByDate = async (req, res, next) => {

}

exports.modifyActiveAppointment = async (req, res, next) => {

}

exports.cancelActiveAppointment = async (req, res, next) => {

}


