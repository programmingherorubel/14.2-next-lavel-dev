import express from 'express'
import { userController } from './user_controller'
import validation_Request from '../middeware/validation_Request'
import studentSchema from '../student/student_validation'

const router = express.Router()

router.post('/create-student',validation_Request(studentSchema),userController.createUserController)
router.delete('/create-student/:id',userController.SingleUserDeleteController)


export default router 