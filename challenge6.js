class Student {
    constructor(name, studentID, grades = []) {
      this.name = name;
      this.studentID = studentID;
      this.grades = grades;
    }
  
    addGrade(grade) {
      if (typeof grade === 'number' && grade >= 0) {
        this.grades.push(grade);
        console.log(`Grade added: ${grade}`);
      } else {
        console.log('Invalid grade.');
      }
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }0)
      const sum = this.grades.reduce((acc, grade) => acc + grade, ;
      const average = sum / this.grades.length;
      return average;
    }
  }
  
 
  const student1 = new Student('John Kamau', 'A12345', [85, 92, 78]);
  student1.addGrade(88);
  console.log(student1.getAverageGrade()); 
  