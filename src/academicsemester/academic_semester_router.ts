import express from 'express'
import { academicSemisterController } from './academic_semester_controller'
import validation_Request from '../middeware/validation_Request'
import academicSemesterSchema from './academic_semester_validation'
import academicSemesterUpdate from './academic_semester__update'

const router = express.Router()
router.post(
  '/create-academic-semester',
  validation_Request(academicSemesterSchema),
  academicSemisterController.createAcademicSemister,
)
router.get('/academic-semester',academicSemisterController.getAllAcademicService)
router.get('/academic-semester/:id',academicSemisterController.getSingleAcademicController)
// router.delete('academic-semester/:id',academicSemisterController.getSingleStudentController)
router.patch('/academic-semester/:id',validation_Request(academicSemesterUpdate),academicSemisterController.updateStudentController)

export default router
