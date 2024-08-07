import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import { not_found, errorHandler } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use('/api/users/', userRoutes);

app.get('/', (req,res)=>{
    res.send("Server is ready")
});

app.use(not_found);
app.use(errorHandler);

app.listen(port, ()=>console.log(`Server started on port ${port}`))