import httpStatus from "http-status"
import sendResponce from "../Error/Responce__"
import catchAsync from "../Error/catchAsync"
import { academicService } from "./academic_semester_service"

const createAcademicSemister = catchAsync(async (req, res, next) => {
    const result = await academicService.createAcademicService(req.body)
    sendResponce(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'create academic semester Successfully',
      data: result,
    })
  })

  
const getAllAcademicService = catchAsync(async (req, res, next) => {
  const result = await academicService.getAllAcademicSemesterService()
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All student show Successfully',
    data: result,
  })
})

const getSingleAcademicController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await academicService.getSingleAcademicSemesterService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'single academic semester show Successfully',
    data: result,
  })
})

const SingleStudentDeleteController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await academicService.getSingleAcademicSemesterService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Delete student Successfully',
    data: result,
  })
})
const updateStudentController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const updateData = req.body
  const result = await academicService.updateAcademicSemesterService(id, updateData)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Update student Successfully',
    data: result,
  })
})

export const academicSemisterController = {
    createAcademicSemister,
    getAllAcademicService,
    getSingleAcademicController,
    SingleStudentDeleteController,
    updateStudentController
}