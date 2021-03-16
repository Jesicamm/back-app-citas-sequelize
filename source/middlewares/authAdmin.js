const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'adminpalabrasecreta';

/* This function is to verify the token of the admin
when rendering the future appointments or deleten them */

const authAdmin =  async (req, res, next) => {
    try{
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1]
        const payload = jwt.verify(token,secret)
        if(!payload){
            throw new Error('Cannot be verified')
        }
        const adminId = req.params.id
        if (adminId != payload.adminId){
            throw new Error('Admin cannot be verified')
        }
        next()
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
}

module.exports = authAdmin;