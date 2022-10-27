// 2nd practice below

const employee = {
    name: "kyle",
    streetAddress: "123 Road"
}

function updateEmployeeWithKeyAndValue() {
    const newObject = {...employee}
    newObject.name = "Sam"
    newObject.streetAddress = "11 Broadway"

    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey() {
    const newObject = {...employee}
    delete newObject.name
    return newObject
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name
    return employee
}

// 1st practice below
// const employee = {
//     name: "Kyle",
//     streetAddress: "123 Road"
// }
// function updateEmployeeWithKeyAndValue() {
//     let newEmployee = {...employee}
//     newEmployee.streetAddress = "11 Broadway"
//     return newEmployee
// }



// function destructivelyUpdateEmployeeWithKeyAndValue() {
//     employee.name = "Sam"
//     employee.streetAddress = "12 Broadway"
//     return employee
// }

// function deleteFromEmployeeByKey() {
//     let newEmployee = {...employee};
//     delete newEmployee.name
//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey() {
//     delete employee.name
//     return employee
// }

// first attempt below

// const employee = {
//     name: "Kyle",
//     streetAddress: "Fort Collins",
// }

// function updateEmployeeWithKeyAndValue() {
//     const newEmployee = {...employee}
//     newEmployee.streetAddress = "11 Broadway"

//     return newEmployee
// }
// function destructivelyUpdateEmployeeWithKeyAndValue() {
//     employee.streetAddress = "12 Broadway"

//     return employee
// }

// function deleteFromEmployeeByKey() {
//     const newEmployee = {...employee}
//     delete newEmployee.name

//     return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey() {
//     delete employee.name
    
//     return employee
// }