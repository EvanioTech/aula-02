"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = createCourse;
const create_course_service_1 = __importDefault(require("./create-course-service"));
function createCourse(request, response) {
    create_course_service_1.default.execute("NodeJS", 10, "Mayk");
    return response.send();
}
