
import { Schema } from "mongoose";

const userSchame =new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        
    },
    gender:{
        type:String,
        enum:['Male','Female']
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    }
},
{
    timetamps:true,
});
const userModel =mongoose.model('User',userSchame);
export default userModel