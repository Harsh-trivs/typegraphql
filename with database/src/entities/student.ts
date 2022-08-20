
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("Student")
@ObjectType("Student")
class Student extends BaseEntity {
   @PrimaryGeneratedColumn("uuid")
   @Field()
   id: string;

   @Column()
   @Field()
   name: string;

}

export default Student;