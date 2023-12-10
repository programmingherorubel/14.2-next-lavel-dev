type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type TacademicSemister = {
    name:'Autumn' | 'Summar' | 'Fall';
    year:String;
    code:'01' | '02' | '03' ;
    startMonth:Month;
    endMonth:Month;
} 

type typeValidationMapper = {
    [key:string]:string
 }
 export const validSemister: typeValidationMapper = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  };