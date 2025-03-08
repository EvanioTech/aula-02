

class CreateCourseService {
  execute(
    name: string,
    duration: number,
    educator: string
  ) : void { console.log(name, duration, educator);
    
  }
}

export default new CreateCourseService(); // Singleton pattern
