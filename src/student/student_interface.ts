import { Types } from "mongoose";

export type FullName = {
    firstName:string;
    middleName:string;
    lastName:string;
}

export type Gardian = {
    fathersName:string;
    mothersName:string;
}

export type TstudentInterface = {
    id:string ;
    user:Types.ObjectId;
    name:FullName;
    gender:'Male' | 'Female';
    dateOfBirth:string;
    email:string;
    contactNumber:string;
    emergencyContact:string;
    address:string;
    permanentAddress:string;
    profileImage:string;
    gardian:Gardian;
    admisstionSemester:Types.ObjectId,
    academicDepartment:Types.ObjectId,
    isDelete:boolean
}

