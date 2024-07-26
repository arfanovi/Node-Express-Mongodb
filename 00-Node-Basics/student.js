// If i want immediately exports and import 

exports.department = () => {
    return "CSE";
}

const getName = () => {
    return "Ovi "
}

const getAge = () => {
    return "25 years old"
}


const cGpa = 2.92;
const  id = 201002487;



// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cGpa;


module.exports = {
    getName,
    getAge,
    cGpa,
    id
};