import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware'
import connectDB from './config/db'


import userRoutes from './routes/user'
import categoryRoutes from './routes/category'
import storeRoutes from './routes/store'
import cartRoutes from './routes/cart'
import productRoutes from './routes/product'


dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())


app.use('/api/users', userRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/store', storeRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/product', productRoutes)


app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/public')))

    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
}



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
)
