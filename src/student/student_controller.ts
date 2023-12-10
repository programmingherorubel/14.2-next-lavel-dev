import httpStatus from 'http-status'
import sendResponce from '../Error/Responce__'
import { studentService } from './student_service'
import catchAsync from '../Error/catchAsync'

const getAllStudentController = catchAsync(async (req, res, next) => {
  const result = await studentService.getAllStudent()
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All student show Successfully',
    data: result,
  })
})

const getSingleStudentController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await studentService.getSingleStudentService(id)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'single student show Successfully',
    data: result,
  })
})

const SingleStudentDeleteController = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await studentService.deleteSingleStudentService(id)
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
  const result = await studentService.updateStudentService(id, updateData)
  sendResponce(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Update student Successfully',
    data: result,
  })
})
export const studentController = {
  getAllStudentController,
  getSingleStudentController,
  SingleStudentDeleteController,
  updateStudentController,
}
