import { Request, Response } from 'express';
import CreateCourseService  from './create-course-service';



export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute("NodeJS", 10, "Mayk");
    
    return response.send();
}