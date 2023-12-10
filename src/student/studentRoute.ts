import express from 'express'
import { studentController } from './student_controller'

const router = express.Router()
    router.get('/',studentController.getAllStudentController)
    router.get('/:id',studentController.getSingleStudentController)
    router.delete('/:id',studentController.SingleStudentDeleteController)
    router.patch('/:id',studentController.updateStudentController)


export default router 