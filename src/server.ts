
import express from 'express';
import { createCourse } from './routes';


const app =express();


app.get("/",createCourse); // localhost:3333


app.listen(3333); // localhost:3333