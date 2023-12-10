import express from 'express'
import validation_Request from '../middeware/validation_Request'
import academicDepartmentValidation from './academic_department_validation'
import { academicFacultyController } from './academic_department_controller'
import academicDepartmentUpdateValidation from './academic_department_service_update'

const router = express.Router()
router.post(
  '/create-department/',
  validation_Request(academicDepartmentValidation),
  academicFacultyController.createDepartmentController,
)
router.get('/', academicFacultyController.getAllDepartmentController)
router.get('/:id', academicFacultyController.getSingleDepartmentController)
router.delete('/:id', academicFacultyController.getSingleDepartmentController)
router.patch(
  '/:id',
  validation_Request(academicDepartmentUpdateValidation),
  academicFacultyController.updateDepartmentController,
)

export default router
