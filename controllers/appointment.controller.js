const {Appointment,Client,Clinic} = require('../models')



class AppointmentController {


    //CRUD APPOINTMENT


    // CREATE A NEW APPOINTMENT

    async createAppoint(userId,clinicId,appointDate,treatment) {
        // const appointment = await Appointment.create({userId,clinicId,appointDate,treatment})
        // const client = await Client.findByPk(userId)
        // const clinic = await Clinic.findByPk(clinicId)
        // client.serviceId = appointment.id
        // clinic.appointId = appointment.id
        // const serviceId = client.serviceId 
        // const appointId = clinic.appointId 
        // await client.update(serviceId);
        // await clinic.update(appointId);
        return await Appointment.create({userId,clinicId,appointDate,treatment});
    }


    // READ ALL APPOINTMENTS
    async indexAll(){
        return Appointment.findAll()
    }

}


let appointmentController = new AppointmentController()

module.exports = appointmentController