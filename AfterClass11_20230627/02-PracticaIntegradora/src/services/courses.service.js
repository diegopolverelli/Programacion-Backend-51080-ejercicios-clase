import Courses from '../dao/dbManagers/courses.js';
const coursesManager = new Courses();

export class CousersService{

    async getCourseById(id){
        return await coursesManager.getById(id);
    }

    async updateCourse(id, course){
        return await coursesManager.updateCourse(id, course)
    }

}