import { Schema, model } from "mongoose";
import { TuserInterface } from "./user_interface";
import bcrypt from 'bcrypt'

const userSchema = new Schema<TuserInterface>({
    needPasswordChange:{
        type:Boolean,
        default:false
    },
    id:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:['admin','student','faculty'],
        default:'student'
    },
    isDelete:{
        type:Boolean,
        default:false
    },
    status: {
        type: String,
        enum: ['Active', 'Blocked'],
        default: 'Active',
      }
},{
    timestamps:true
})

userSchema.pre('save',async function(next){
    try{
        const saltRounds = 10;
        const hashingPassword = await bcrypt.hash(this.password,saltRounds)
        this.password = hashingPassword
        next()
    }
    catch(error){
        next()
    }
})



export const User_Schema = model<TuserInterface>('user',userSchema)