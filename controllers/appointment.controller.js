const {Appointment,Client,Clinic} = require('../models')

class AppointmentController {


    //CRUD APPOINTMENT


    // CREATE A NEW APPOINTMENT

    async createAppoint(clientId,clinicId) {
        const userEntity =  await Client.findByPk(clientId)
        const clinicEntity =  await Clinic.findByPk(clinicId)
        if(!userEntity || !clinicEntity){
            throw new Error('User Not Found')
        }
        return await Appointment.create({
            clientId: clientId,
            clinicId: clinicId
        });
    }


    // READ ALL APPOINTMENTS
    async indexAll(){
        return Appointment.findAll()
    }

}


let appointmentController = new AppointmentController()

module.exports = appointmentController