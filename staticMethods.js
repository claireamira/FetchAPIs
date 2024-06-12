class Student{
    #age

    constructor(name, age, avrg){
        this.name=name
        this.#age=age
        this.avrg=avrg
    }

    getGrade(){
        if(this.avrg>50){
            return "pass"
        } else {
            return "Fail"
        }
    }
   get getStudentsAge(){
        return this.#age
    }

    static getSchoolDetails(){
        console.log("This is called Mwea School")
    }
}
console.log(Student.getStudentsAge)

let studentObj = new Student ("John", 13, 417)
console.log(studentObj.getGrade())

Student.getSchoolDetails()



{
    class Calculator{


static multiply(a, b){
    return a*b
}
static addition(a,b){
    return a+b
}
static subtraction (a, b){
    return a-b
}

}

console.log(Calculator.addition(2, 5))
}