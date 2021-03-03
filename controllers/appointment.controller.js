const {Appointment,Client,Clinic} = require('../models')



class AppointmentController {


    //CRUD APPOINTMENT


    // CREATE A NEW APPOINTMENT

    async createAppoint(userId,clinicId,appointDate,treatment) {
        return await Appointment.create({userId,clinicId,appointDate,treatment});
    }


    // READ ALL APPOINTMENTS
    async indexAll(){
        return Appointment.findAll()
    }

}


let appointmentController = new AppointmentController()

module.exports = appointmentController