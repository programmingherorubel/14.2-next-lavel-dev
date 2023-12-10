import mongoose from 'mongoose'
import { academic_Semester } from '../academicsemester/academic_semester_model'
import config from '../config'
import { TstudentInterface } from '../student/student_interface'
import { Student_schema } from '../student/student_model'
import { TuserInterface } from './user_interface'
// import { NewUser, TuserInterface } from "./user_interface"
import { User_Schema } from './user_model'
import { genaraleStudentId } from './user_utils_'
import { App_error } from '../Error/app_error';
import httpStatus from 'http-status'

const createStudentUserService = async (
  password: string,
  payload: TstudentInterface,
) => {
  let UserData : Partial<TuserInterface> = {}

  const session = await mongoose.startSession()

  // find academic semester 
  const admisstionSemester = await academic_Semester.findById(payload.admisstionSemester)
    UserData.role = 'student'
    try{
      session.startTransaction()
      UserData.id =await genaraleStudentId(admisstionSemester as any)
      UserData.password = password || config.password
  
      const createUser = await User_Schema.create([UserData],{session})
      
      if(!createUser.length){
        throw new App_error(httpStatus.BAD_REQUEST,'faild to create user')
      }

      if(createUser.length){
          payload.id = createUser[0].id
          payload.user = createUser[0]._id
        
          const createStudent = await Student_schema.create([payload],{session})
          if(!createStudent.length){
            throw new App_error(httpStatus.BAD_REQUEST,'faild to create student')
          }
          await session.commitTransaction()
          await session.endSession()
          return createStudent
      }
    }
    catch(error){
      await session.abortTransaction()
      await session.endSession()
    }
   
}

const getAllUserService = async () => {
  const result = await User_Schema.find()
  return result
}
const getSingleUserService = async (id: string) => {
  const result = await User_Schema.findById(id)
  return result
}
const deleteSingleUserService = async (id: string) => {
  const session = await mongoose.startSession()
  try{
    session.startTransaction()
    const result = await User_Schema.findOneAndUpdate(
      {id}, 
      { isDelete: true },
      {new:true,session}
      )
    if(!result){
      throw new App_error(httpStatus.BAD_REQUEST,'faild to delete Users')
    }

    const deleteStudent = await Student_schema.findOneAndUpdate(
      {id},
      { isDelete: true },
      {new:true,session}
    )
    if(!deleteStudent){
      throw new App_error(httpStatus.BAD_REQUEST,'faild to delete Student')
    }
    await session.commitTransaction()
    await session.endSession()
    return result
  }
  catch(err){
    await session.abortTransaction()
    await session.endSession()
  }
}
// const updateUserService = async (
//   id: string,
//   payload: Partial<TuserInterface>,
// ) => {
//   const { name, gardian, ...remainingData } = payload
//   // update name stage one
//   const modifiedUpdateData: Record<string, unknown> = {
//     ...remainingData,
//   }
//   if (name && Object.keys(name).length) {
//     for (const [key, value] of Object.entries(name)) {
//       modifiedUpdateData[`name.${key}`] = value
//     }
//   }
//   if (gardian && Object.keys(gardian).length) {
//     for (const [key, value] of Object.entries(gardian)) {
//       modifiedUpdateData[`gardian.${key}`] = value
//     }
//   }
//   console.log(modifiedUpdateData)
//   const result = await Student_schema.findByIdAndUpdate(
//     id,
//     modifiedUpdateData,
//     { new: true },
//   )
//   return result
// }

export const userService = {
  createStudentUserService,
  getAllUserService,
  getSingleUserService,
  deleteSingleUserService,
  //   updateUserService,
}
