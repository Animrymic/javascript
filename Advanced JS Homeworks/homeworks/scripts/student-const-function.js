function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    };

    this.getGradesAverage = function() {
        if(this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    };
}

const students = [
    new Student("Alice", "Smith", 2000, "Web Development", [90, 85, 88]),
    new Student("Bob", "Johnson", 1999, "Mathematics", [78, 82, 80]),
    new Student("Charlie", "Brown", 2001, "PE", [95, 92, 98])
];

students.forEach(student => {
    console.log(student.getInfo());
    console.log("Age:", student.getAge());
    console.log("Average Grade:", student.getGradesAverage());
    console.log("------------");
});