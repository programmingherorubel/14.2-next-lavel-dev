import { z } from 'zod'

// Define Zod schema for TacademicSemister
const academicSemesterSchema = z.object({
  body: z.object({
    name: z.string(),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]),
    endMonth: z.enum([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]),
    year: z.string(),

  }),
})

export default academicSemesterSchema
