import { z } from 'zod'

// Define Zod schema for TacademicSemister
const academicSemesterUpdate = z.object({
  body: z.object({
    name: z.string().optional(),
    code: z.enum(['01', '02', '03']).optional(),
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
    ]).optional(),
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
    ]).optional(),
    year: z.string().optional(),
  }),
})

export default academicSemesterUpdate
