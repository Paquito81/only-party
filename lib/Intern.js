const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }
    getAssign() {
        return 'Intern'
    }

    // getCredentials() {
    //     return {
    //         name: this.name,
    //         Employee: this.employee,
    //         email: this.email,
    //        school: this.school
            
    //     }; 
    // }
}

module.exports = Intern;