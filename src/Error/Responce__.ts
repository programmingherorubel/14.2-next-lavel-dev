import { Response, response } from 'express'

type ResponceType<T> = {
  statusCode: number
  success: boolean
  message?: string
  data: T
}

const sendResponce = <T>(res: Response, data: ResponceType<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data:data.data
  })
}


export default sendResponce