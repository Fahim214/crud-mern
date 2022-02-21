import express from 'express'
import db from './config/database.js'
import ProductRouter from './routes/index.js'
import cors from 'cors'

const app = express()

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:' , error);
}

app.use(cors())
app.use(express.json())
app.use('/products',ProductRouter)

app.listen(3009, () => {
    console.log('Server running att 3009');
})