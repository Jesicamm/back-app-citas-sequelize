const {Appointment,Client,Clinic} = require('../models')
const {Op} = require('sequelize')



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
        const dateOfToday = new Date
        return  await Appointment.findAll({where: {userId, appointDate: {[Op.gte]: dateOfToday}}})
    }

}

 
let appointmentController = new AppointmentController()

module.exports = appointmentController