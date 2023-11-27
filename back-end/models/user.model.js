
/*
Model:

- Username : string
- password : string
- role : admin/receptionist/doctor/user
- timestamp

*/

const  mongoose =require( 'mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true,'all fields are required'],
    },
    lastname: {
        type: String,
        required: [true,'all fields are required'],
    },
    password: {
        type: String,
        required: [true,'all fields are required'],
        trim: true,
        minlength: [8, 'password ahould be atleast 8 characters']
        // match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    },
    email: {
        type: String,
        required: [true,'all fields are required'],
        trim: true,
        unique: true
    },
    role : {
        type: String,
        required: [true,'role must be defined'],
        enum: ['admin', 'receptionist', 'doctor', 'user'],
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: true
    }
})

const userModel = new mongoose.model('user', UserSchema);
module.exports = userModel;
