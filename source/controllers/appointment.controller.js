const {Appointment,Client,Clinic} = require('../models')
const {Op} = require('sequelize')



class AppointmentController {


    //CRUD APPOINTMENT


    // CREATE A NEW APPOINTMENT

    async createAppoint(userId,clinicId,appointDate,treatment,covid,payMethod) {
        return await Appointment.create({userId,clinicId,appointDate,treatment,covid,payMethod});
    }

    // FIND APPOINTMENTS
    async indexAll(){
        return Appointment.findAll()
    }

    // FIND APPOINTMENTS
    async indexAppointByUser(userId){
        const dateOfToday = new Date
        return  await Appointment.findAll({where: {userId, appointDate: {[Op.gte]: dateOfToday}}})
    }

        // DELETE APPOINTMENT BY USER ID
    async cancelAppointByUser(userId,appointId){
        const dateOfToday = new Date
        const futureAppoint = await Appointment.findAll({where: {userId, appointDate: {[Op.gte]: dateOfToday}}})
        if(!futureAppoint){
            throw new Error ('Not authorized to delete old appointments')
        }else{
            return await Appointment.destroy({where: {id: appointId}})
        }
    }

         // DELETE APPOINTMENT BY USER ID
        async cancelAppoint(appointId){
                return await Appointment.destroy({where: {id: appointId}})
        }

}

  
let appointmentController = new AppointmentController()

module.exports = appointmentController