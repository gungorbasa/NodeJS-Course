// If you want to change the variable in the future, use let
// const will never change
const name = 'Gungor';
let age = 30;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHadHobby) {
    return (
        'Name is ' + 
        userName + ', age is ' + 
        userAge + ' and the user has hobbies: ' + 
        userHadHobby
    );
} 

// Another way to create named function => Arrow funtion
// We can use this inside of this
const summarizeUser2 = (userName, userAge, userHadHobby) => {
    return (
        'Name is ' + 
        userName + ', age is ' + 
        userAge + ' and the user has hobbies: ' + 
        userHadHobby
    );
}
console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUser2(name, age, hasHobbies));