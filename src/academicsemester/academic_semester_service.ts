import { TacademicSemister, validSemister } from './academic_semester_interface'
import { academic_Semester } from './academic_semester_model';

const createAcademicService = async (payload: TacademicSemister) => {
  if (validSemister[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await academic_Semester.create(payload);
  return result;
};

const getAllAcademicSemesterService = async () => {
  const result = await academic_Semester.find()
  return result
}
const getSingleAcademicSemesterService = async (id: string) => {
  const result = await academic_Semester.findById(id)
  return result
}
const deleteAcademicSemesterService = async (id: string) => {
  const result = await academic_Semester.findByIdAndUpdate(id, {
    isDelete: true,
  })
  return result
}
const updateAcademicSemesterService = async (id: string, payload: Partial<TacademicSemister>) => {
  
  if (payload.name && payload.code &&  validSemister[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await academic_Semester.findByIdAndUpdate(id, payload, { new: true });
  return result;
};



export const academicService = {
  createAcademicService,
  getAllAcademicSemesterService,
  getSingleAcademicSemesterService,
  deleteAcademicSemesterService,
  updateAcademicSemesterService
}
