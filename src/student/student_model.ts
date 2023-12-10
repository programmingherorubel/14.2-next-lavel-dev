import { Schema, model } from 'mongoose'
import { FullName, Gardian, TstudentInterface } from './student_interface'

const fullNameSchema = new Schema<FullName>({
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
})

const gardianSchema = new Schema<Gardian>({
  fathersName: {
    type: String,
  },
  mothersName: {
    type: String,
  },
})

const studentSchema = new Schema<TstudentInterface>(
  {
    id: {
      type: String,
    },
    user:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },
    admisstionSemester:{
      type:Schema.Types.ObjectId,
      ref:'academicSemester'
    },
    academicDepartment:{
      type:Schema.Types.ObjectId,
      ref:'academicDepartment'
    },
    isDelete:{
      type:Boolean,
      default:false
  },
    name: fullNameSchema,
    gender: {
      type:String,
      enum:['Male' , 'Female']
    },
    address: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
    },
    emergencyContact: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
    gardian:gardianSchema
  },
  {
    timestamps: true,
  },
)



export const Student_schema = model<TstudentInterface>('student', studentSchema)
