export type TuserInterface = {
    id:string;
    password:string;
    needPasswordChange:boolean;
    role:'admin' | 'student' | 'faculty',
    isDelete:boolean;
    status:'Active'|'Blocked',
}

export type NewUser = {
    password:string;
    role:string
}