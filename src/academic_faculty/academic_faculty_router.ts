import express from 'express'
import { academicFacultyController } from './academic_faculty_controller'
import validation_Request from '../middeware/validation_Request'
import academicFacultyValidation from './academic_faculty_validation'

const router = express.Router()
    router.post('/create-faculty/',validation_Request(academicFacultyValidation),academicFacultyController.createFacultyController)
    router.get('/',academicFacultyController.getAllFacultyController)
    router.get('/:id',academicFacultyController.getSingleFacultyController)
    router.delete('/:id',academicFacultyController.SingleFacultyDeleteController)
    router.patch('/:id',validation_Request(academicFacultyValidation),academicFacultyController.updateFacultyController)


export default router 