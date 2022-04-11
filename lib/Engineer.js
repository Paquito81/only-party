const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
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