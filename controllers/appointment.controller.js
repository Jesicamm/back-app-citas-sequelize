const {Appointment} = require('../models')

class AppointmentController {


    //CRUD APPOINTMENT




    //READ ALL APPOINTMENTS
    async indexAll(){
        return Appointment.findAll()
    }

}


let appointmentController = new AppointmentController()

module.exports = appointmentController