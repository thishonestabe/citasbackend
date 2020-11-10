
const express = require('express');

const clientController = require('./client.controller');

const verify = require('../common/verifyToken');

const router = express.Router();

router.post('/login', clientController.login);

router.post('/register', clientController.register);

router.post('/logout',verify, clientController.logout);

router.post('/createAppointment',verify, clientController.createAppointment);

router.get('/activeAppointment',verify, clientController.activeAppointment);

router.get('/allAppointments',verify, clientController.allAppointments);

router.get('/getAvailableAppointmentsByDate',verify, clientController.getAvailableAppointmentsByDate);

router.patch('/modifyActiveAppointment',verify, clientController.modifyActiveAppointment);

router.patch('/cancelActiveAppointment',verify, clientController.cancelActiveAppointment);





module.exports = router;
