import Student from "../entities/student";
import {NewStudent} from "../types/inputs";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
class helloworld {
    @Mutation(() => Student)
    async createStudent(@Arg("NewStudentData") newStudent: NewStudent) {
        try {
            const student = new Student;
            student.name = newStudent.name;
            const studentCreated = await student.save();
            return studentCreated;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    @Query(()=>String)
    async hello(){
        return "hello";
    }

}
export default helloworld;