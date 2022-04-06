const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, EmployeeID, email) {
        super(name, EmployeeID, email);
    }
}



module.exports = Engineer;