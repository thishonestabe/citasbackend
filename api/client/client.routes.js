
const express = require('express');

const clientController = require('./client.controller');

const router = express.Router();

router.post('/login', clientController.login);

router.post('/register', clientController.register);

router.get('/activeAppointment', clientController.activeAppoinment);

router.get('/allAppointments', clientController.allAppointments);

router.get('/getAvailableAppointmentsByDate', clientController.getAvailableAppointmentsByDate);

router.patch('/modifyActiveAppointment', clientController.modifyActiveAppointment);

router.patch('/cancelActiveAppointment', clientController.cancelActiveAppointment);





module.exports = router;
