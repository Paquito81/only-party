const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }

    // getCredentials() {
    //     return {
    //         name: this.name,
    //         Employee: this.employee,
    //         email: this.email,
    //        github: this.github
 
    //     }; 
    // }
}

module.exports = Engineer;