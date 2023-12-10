import { TstudentInterface } from './student_interface'
import { Student_schema } from './student_model'

const createStudentService = async (data: TstudentInterface) => {
  const result = await Student_schema.create(data)
  return result
}
const getAllStudent = async () => {
  const result = await Student_schema.find()
    .populate('user')
    .populate('admisstionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'accademicFaculty',
      },
    })

  return result
}
const getSingleStudentService = async (id: string) => {
  const result = await Student_schema.findById(id)
    .populate('user')
    .populate('admisstionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'accademicFaculty',
      },
    })

  return result
}
const deleteSingleStudentService = async (id: string) => {
  const result = await Student_schema.findByIdAndUpdate(id, { isDelete: true })
  return result
}
const updateStudentService = async (
  id: string,
  payload: Partial<TstudentInterface>,
) => {
  const { name, gardian, ...remainingData } = payload
  // update name stage one
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingData,
  }
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdateData[`name.${key}`] = value
    }
  }
  if (gardian && Object.keys(gardian).length) {
    for (const [key, value] of Object.entries(gardian)) {
      modifiedUpdateData[`gardian.${key}`] = value
    }
  }
  console.log(modifiedUpdateData)
  const result = await Student_schema.findByIdAndUpdate(
    id,
    modifiedUpdateData,
    { new: true },
  )
  return result
}

export const studentService = {
  createStudentService,
  getAllStudent,
  getSingleStudentService,
  deleteSingleStudentService,
  updateStudentService,
}
