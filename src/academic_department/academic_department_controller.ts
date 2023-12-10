import httpStatus from "http-status"
import sendResponce from "../Error/Responce__"
import catchAsync from "../Error/catchAsync"
import { academicDepartmentService } from "./academic_department_service"

const createDepartmentController = catchAsync(async (req, res, next) => {
  const result = await academicDepartmentService.createDepartmentService(req.body)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All student show Successfully',
    data: result,
  })
})
const getAllDepartmentController = catchAsync(async (req, res, next) => {
  const result = await academicDepartmentService.getAllDepartment()
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All student show Successfully',
    data: result,
  })
})

const getSingleDepartmentController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await academicDepartmentService.getSingleDepartmentService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'single student show Successfully',
    data: result,
  })
})

const SingleDepartmentDeleteController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await academicDepartmentService.deleteSingleDepartmentService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Delete student Successfully',
    data: result,
  })
})
const updateDepartmentController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const updateData = req.body
  const result = await academicDepartmentService.updateDepartmentService(id, updateData)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Update student Successfully',
    data: result,
  })
})

export const academicFacultyController = {
  createDepartmentController,
  getAllDepartmentController,
  getSingleDepartmentController,
  SingleDepartmentDeleteController,
  updateDepartmentController,
}
