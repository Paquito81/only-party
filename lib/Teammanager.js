const Employee = require('../lib/Employee');

class Teammanager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;
        this.role = 'Manager';
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getNumber() {
        return this.office;
    }

    getRole() {
        return this.role;
    }

    // getCredentials() {
    //     return {
    //        name: this.name,
    //        Employee: this.employee,
    //        email: this.email,
    //        office: this.officeNumber

    //     };
    // }

}

module.exports = Teammanager;