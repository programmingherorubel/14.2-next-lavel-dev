import { NextFunction, Request, Response } from 'express'
import { userService } from './user_service'
import sendResponce from '../Error/Responce__'
import httpStatus from 'http-status'
import catchAsync from '../Error/catchAsync'

const createUserController = catchAsync(async (req, res, next) => {
  const { password, studentData } = req.body
  const result = await userService.createStudentUserService(
    password,
    studentData,
  )
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'student create successfully',
    data: result,
  })
})
const getAllUserController = catchAsync(async (req, res, next) => {
  const result = await userService.getAllUserService()
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All student show Successfully',
    data: result,
  })
})
const getSingleUserController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await userService.getSingleUserService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single student show Successfully',
    data: result,
  })
})

const SingleUserDeleteController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await userService.deleteSingleUserService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'delete student Successfully',
    data: result,
  })
})


// const updateUserController = async (req: Request, res: Response) => {
//   try {
//     const {id} = req.params
//     const updateData = req.body
//     const result = await userService.(id,updateData)
//     res.status(200).json({
//       success: true,
//       message: 'update student Successfully',
//       data:result
//     })
//   } catch (error:any) {
//     res.status(500).json({
//         success: true,
//         message: error?.message,
//         data:null
//       })
//   }
// }

export const userController = {
  createUserController,
  getAllUserController,
  getSingleUserController,
  SingleUserDeleteController,
  // updateUserController
}
