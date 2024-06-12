let student = {
    name: "Farida",
    course: "Science",
    maths: 89,
    eng: 80,
    kis: 45,
    phyc: 80
}
let {name,  ...myRest}= student


console.log(myRest)