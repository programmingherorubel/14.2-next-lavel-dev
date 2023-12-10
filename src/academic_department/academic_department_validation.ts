import {z} from 'zod'
const academicDepartmentValidation = z.object({
    body:z.object({
        name:z.string(),
        accademicFaculty:z.string()
    })
})


export default academicDepartmentValidation