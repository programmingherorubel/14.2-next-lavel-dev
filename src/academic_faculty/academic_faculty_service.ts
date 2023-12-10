import { AcademicInterface } from "./academic_faculty_interface"
import { AcademicFaculty } from "./academic_faculty_model"

const createFacultyService = async (data: AcademicInterface) => {
  const result = await AcademicFaculty.create(data)
  return result
}
const getAllFaculty = async () => {
  const result = await AcademicFaculty.find()
  return result
}
const getSingleFacultyService = async (id: string) => {
  const result = await AcademicFaculty.findById(id)
  return result
}
const deleteSingleFacultyService = async (id: string) => {
  const result = await AcademicFaculty.findByIdAndUpdate(id, { isDelete: true })
  return result
}
const updateFacultyService = async (
  id: string,
  payload: Partial<AcademicInterface>,
) => {
  const result  = await AcademicFaculty.findByIdAndUpdate(
    id,
    payload,
    {new:true}
  )
  return result
}

export const studentService = {
    createFacultyService,
    getAllFaculty,
    getSingleFacultyService,
    deleteSingleFacultyService,
    updateFacultyService
}
