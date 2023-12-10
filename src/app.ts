import express, { Application,Response } from 'express'
import cors from 'cors'
const app: Application = express()
import globalErrorHandeler from './Error/global__Error__'
import notFound from './Error/not__Found__'
import router from './Router'

// parser
app.use(express.json())
app.use(cors())

app.get('/', (res: Response) => {
  res.send('hello world')
})

app.use('/api/v1', router)
app.use(globalErrorHandeler)

app.use(notFound)

export default app
