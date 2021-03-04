const {Appointment,Client,Clinic} = require('../models')



class AppointmentController {


    //CRUD APPOINTMENT


    // CREATE A NEW APPOINTMENT

    async createAppoint(userId,clinicId,appointDate,treatment) {
        return await Appointment.create({userId,clinicId,appointDate,treatment});
    }

    // FIND APPOINTMENTS
    async indexAll(){
        return Appointment.findAll()
    }

    // FIND APPOINTMENTS
    async indexAppointByUsers(userId){
        return  await Appointment.findAll({where: {userId}})
    }

}

 
let appointmentController = new AppointmentController()

module.exports = appointmentController