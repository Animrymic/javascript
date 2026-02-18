fetch("https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/main/G1/Class07/students.json")
  .then(res => res.json())
  .then(students => {

 let StudentsAbove3 = students.filter(student => student.averageGrade > 3)
 .map(s => `${s.firstName} ${s.lastName}`)
    console.log("Students with avg > 3:", StudentsAbove3);

let FemaleStudentAvg5 = students.filter(s => s.gender === "Female" && s.averageGrade === 5)
.map(s => `${s.firstName} ${s.lastName}`)
    console.log("Female Students with average 5:", FemaleStudentAvg5);

let MaleStudent18InSkopje = students.filter(s => s.gender === "Male" && s.city === "Skopje" && s.age > 18)
.map(s => `${s.firstName} ${s.lastName}`)
    console.log("Male Students over 18 in Skopje:" , MaleStudent18InSkopje);

let FemaleAverageOver24 = students.filter(s => s.gender === "Female" && s.age > 24)
.map(s => `${s.firstName} ${s.lastName}`)
    console.log("Female Students over 24 average grade: ", FemaleAverageOver24);

let AllMaleWithBAndGradeOver2 = students.filter(s => s.gender === "Male" && s.averageGrade > 2 && s.firstName.startsWith("B"))
.map(s => `${s.firstName} ${s.lastName}`)
    console.log(AllMaleWithBAndGradeOver2);

// HOMEWORK TASKS

let StudentOlderThan30 = students.filter(s => s.age > 30)
.map(s => `${s.firstName} ${s.lastName} ${s.age}`)
    console.log("Students older than 30: ",StudentOlderThan30);

let StudentCityWithB = students.filter(s => s.city.startsWith("B"))
.map(s => `${s.firstName} ${s.lastName} ${s.city}`)
    console.log("Students from a city starting with B: ",StudentCityWithB);

let AllStudentEmails = students.filter(s => s.email)
.map(s => s.email)
    console.log(AllStudentEmails);

let StudentsExaclyThree = students.filter(s => s.averageGrade === 3)
.map(s => `${s.firstName} ${s.lastName}`)
    console.log(StudentsExaclyThree);

let FemaleStudents = students.filter(s => s.gender === "Female")
.map(s => `${s.firstName} ${s.lastName}`)
    console.log("Number of Female Students: ", FemaleStudents.length);
let MaleStudents = students.filter(s => s.gender === "Male")
.map(s => `${s.firstName} ${s.lastName}`)
    console.log("Number of Male Students: ",MaleStudents.length); 


  })
  .catch(error => console.error(error));