import { Router } from "express";
import userRouter from '../user/user_router'
import studentRouter from '../student/studentRoute'
import academicsemister from '../academicsemester/academic_semester_router'
import academicFaculty from '../academic_faculty/academic_faculty_router'
import department from '../academic_department/academic_department_router'
const router = Router()


const myRouter = [
    {path:'/users',route:userRouter},
    {path:'/student',route:studentRouter},
    {path:'/academicsemister',route:academicsemister},
    {path:'/academicfaculty',route:academicFaculty},
    {path:'/department',route:department},
]


myRouter.forEach((route)=>router.use(route.path,route.route))




export default router 