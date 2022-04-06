const Employee = require('./Employee');

class Teammanager extends Employee {
    constructor(name = '') {
        super(name);
    }

    getCredentials() {
       return {
           name: this.name,
           Employee: this.employee,
           email: this.email
           officeNumber: this.officeNumber

        }; 
    }
}

module.exports = Teammanager;