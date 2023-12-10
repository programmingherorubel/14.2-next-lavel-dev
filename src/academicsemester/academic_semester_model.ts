import { Schema, model } from "mongoose";
import { TacademicSemister } from "./academic_semester_interface";

const academicSemester = new Schema<TacademicSemister>({
    name:{
        type:String
    },
    code:{
        type:String,
        enum:['01' , '02' , '03' ]
    },
    startMonth:{
        type:String,
        enum:['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' ,'November' , 'December']
    },
    endMonth:{
        type:String,
        enum:['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' ,'November' , 'December']
    },
    year:{
        type:String
    }
},{
    timestamps:true
})

academicSemester.pre('save',async function(next){
    const isExistSemester = await academic_Semester.findOne({
        name:this.name,
        year:this.year
    }) 
    if(isExistSemester){
        throw Error('semester is already exist.')
    }
    next()
})
export const academic_Semester = model<TacademicSemister>('academicSemester',academicSemester)