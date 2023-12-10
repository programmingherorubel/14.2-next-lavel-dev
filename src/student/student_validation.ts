import { z } from 'zod'

// Define Zod schema for FullName
const fullNameSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
})

// Define Zod schema for Gardian
const gardianSchema = z.object({
  fathersName: z.string(),
  mothersName: z.string(),
})

// Define Zod schema for TstudentInterface
const studentSchema = z.object({
  body: z.object({
    password: z.string(),
    studentData: z.object({
      name: fullNameSchema,
      gender: z.enum(['Male', 'Female']),
      address: z.string(),
      contactNumber: z.string(),
      dateOfBirth: z.string(), // You might want to change this to z.date() if using Date type
      email: z.string(),
      emergencyContact: z.string(),
      profileImage: z.string(),
      permanentAddress: z.string(),
      gardian: gardianSchema,
      admisstionSemester:z.string(),
      academicDepartment:z.string(),
      isDelete:z.boolean().default(false)
    }),
  }),
})
export default studentSchema
