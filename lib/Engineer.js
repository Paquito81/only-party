const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email,)
        this.github = github;
    }

    getGithub() {
        return this.github
    }
    getAssign() {
        return 'Engineer'
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