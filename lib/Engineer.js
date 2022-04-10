const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email,)
        this.github = github;
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

module.exports = Engineer;