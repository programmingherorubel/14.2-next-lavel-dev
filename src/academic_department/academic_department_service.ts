import { TacademicDepartment } from "./academic_department_interface"
import { AcademicDepartmentModel } from "./academic_department_model"

const createDepartmentService = async (data: TacademicDepartment) => {
  const result = await AcademicDepartmentModel.create(data)
  return result
}
const getAllDepartment = async () => {
  const result = await AcademicDepartmentModel.find()
  return result
}
const getSingleDepartmentService = async (id: string) => {
  const result = await AcademicDepartmentModel.findById(id)
  return result
}
const deleteSingleDepartmentService = async (id: string) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id, { isDelete: true })
  return result
}
const updateDepartmentService = async (
  id: string,
  payload: Partial<TacademicDepartment>,
) => {
  const result  = await AcademicDepartmentModel.findByIdAndUpdate(
    id,
    payload,
    {new:true}
  )
  return result
}

export const academicDepartmentService = {
    createDepartmentService,
    getAllDepartment,
    getSingleDepartmentService,
    deleteSingleDepartmentService,
    updateDepartmentService
}
