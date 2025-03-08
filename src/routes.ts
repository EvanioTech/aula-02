import { Request, Response } from 'express';
import CreateCourseService  from './create-course-service';



export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: 'NodeJS',
        duration: 10,
        educator: 'Dani'
    });

    return response.send();
}



