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

  })
  .catch(error => console.error(error));