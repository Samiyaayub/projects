#! /usr/bin/env node
class School {
    name;
    student = [];
    teacher = [];
    addStudent(stdobj) {
        this.student.push(stdobj);
    }
    addTeacher(teobj) {
        this.teacher.push(teobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
//school
let school1 = new School("Aga Khan");
let school2 = new School("St Patrick");
let school3 = new School("GIAIC");
//student
let s1 = new Student("Ahmed Raza", 4, school1.name);
let s2 = new Student("Mudassir", 8, school2.name);
let s3 = new Student("Samiya", 22, school3.name);
let s4 = new Student("Fizza", 30, school3.name);
//teacher
let t1 = new Teacher("Sehar", 26, school1.name);
let t2 = new Teacher("Saira", 27, school2.name);
let t3 = new Teacher("Ariba", 25, school3.name);
//student data
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
school3.addStudent(s4);
//teacher data
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
//school
console.log(school1);
console.log(school2);
console.log(school3);
export {};
