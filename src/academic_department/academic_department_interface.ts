import { Types } from "mongoose";

export type TacademicDepartment = {
    name:string;
    accademicFaculty:Types.ObjectId
}