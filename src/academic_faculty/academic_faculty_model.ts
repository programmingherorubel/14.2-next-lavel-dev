import { Schema, model } from "mongoose";
import { AcademicInterface } from "./academic_faculty_interface";

const academicFacultySchema = new Schema<AcademicInterface>({
    name:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
})


export const AcademicFaculty = model<AcademicInterface>('academicFaculty',academicFacultySchema)
