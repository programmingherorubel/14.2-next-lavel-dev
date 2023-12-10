import {z} from 'zod'
const academicDepartmentUpdateValidation = z.object({
    body:z.object({
        name:z.string(),
        accademicFaculty:z.string().optional()
    })
})


export default academicDepartmentUpdateValidation