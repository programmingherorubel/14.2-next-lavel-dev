import { TacademicSemister } from '../academicsemester/academic_semester_interface'
import { User_Schema } from './user_model'
const findStudentId = async () => {
  const lastStudent = await User_Schema.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastStudent?.id ? lastStudent.id : undefined
}
// create genarate id
export const genaraleStudentId = async (payload: TacademicSemister) => {
  let currentId = (0).toString()
  const lastStudentId = await findStudentId()
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6)
  const lastStudentyear = lastStudentSemesterCode?.substring(0, 4)
  const currentSemesterCode = payload.code
  const currentyear = payload.year
  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentyear &&
    currentyear
  ) {
    currentId = lastStudentId.substring(6)
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')
  incrementId = `${payload.year}${payload.code}${incrementId}`

  return incrementId
}
