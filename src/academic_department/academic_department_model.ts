import { Schema, model } from 'mongoose'
import { TacademicDepartment } from './academic_department_interface'
import { App_error } from '../Error/app_error'

const academicDepartmentScehama = new Schema<TacademicDepartment>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  accademicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'academicFaculty',
  },
},{
  timestamps:true
})

academicDepartmentScehama.pre('save', async function (next) {
  try {
    const existingDepartment = await AcademicDepartmentModel.findOne({
      name: this.name,
    })
    if (existingDepartment) {
      throw new Error('This Department already exist')
    }
    next()
  } catch (error: any) {
    next(error)
  }
})

academicDepartmentScehama.pre('findOneAndUpdate', async function (next) {
  try {
    const query = await this.getQuery()
    const existingDepartment = await AcademicDepartmentModel.findOne(query)
    if (existingDepartment) {
      throw new App_error(404,'department dose not exist')
    }
    next()
  } catch (error: any) {
    next(error)
  }
})

export const AcademicDepartmentModel = model<TacademicDepartment>(
  'academicDepartment',
  academicDepartmentScehama,
)
