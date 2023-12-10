import httpStatus from "http-status"
import sendResponce from "../Error/Responce__"
import catchAsync from "../Error/catchAsync"
import { studentService } from "./academic_faculty_service"



const createFacultyController = catchAsync(async (req, res, next) => {
    const result = await studentService.createFacultyService(req.body)
    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All student show Successfully',
      data: result,
    })
  })
const getAllFacultyController = catchAsync(async (req, res, next) => {
    const result = await studentService.getAllFaculty()
    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All student show Successfully',
      data: result,
    })
  })
  
  const getSingleFacultyController = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const result = await studentService.getSingleFacultyService(id)
    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'single student show Successfully',
      data: result,
    })
  })
  
  const SingleFacultyDeleteController = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const result = await studentService.deleteSingleFacultyService(id)
    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Delete student Successfully',
      data: result,
    })
  })
  const updateFacultyController = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updateData = req.body
    const result = await studentService.updateFacultyService(id, updateData)
    sendResponce(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Update student Successfully',
      data: result,
    })
  })

  export const academicFacultyController = {
    createFacultyController,
    getAllFacultyController,
    getSingleFacultyController,
    SingleFacultyDeleteController,
    updateFacultyController
  }