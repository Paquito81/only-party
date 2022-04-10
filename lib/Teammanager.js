const Employee = require('./Employee');

class Teammanager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;
    }

    getCredentials() {
       return {
           name: this.name,
           Employee: this.employee,
           email: this.email,
           office: this.officeNumber

        }; 
    }
}

module.exports = Teammanager;