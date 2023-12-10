import { NextFunction, Request, Response } from "express"

const globalErrorHandeler = (err:any ,req:Request,res:Response,next:NextFunction)=>{
    let statusCode = err.statusCode || 500 
    let message = err?.message || 'somthing went wrong'
    return res.status(statusCode).json({
        success:false,
        message:message,
        error:err
    })
  }

  export default globalErrorHandeler