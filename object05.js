let student = {
    roll_no: 113,
    name: "Athira",
    mark: 99,
    phone: 9876543210,
    subject: ["maths", "physics"],
    guardian: {
        name: "unnikrishnan",
        phone: 9876543210,
        relation: "father"
    }

}
student.roll_no = 117;
console.log(student["phone"]);

console.log(student.roll_no);
console.log(student.subject[1]);
console.log(student.guardian.relation);
student.attendance = "95%";
console.log(student);
delete student.phone;
console.log(student);
console.log(student.hasOwnProperty("mark"))
console.log(student.hasOwnProperty("reg_no"))