import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('API is running')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is in ${process.env.NODE_ENV} running on port ${PORT}`.yellow.bold))