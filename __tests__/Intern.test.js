const Intern = require('lib/Intern.js');

test('intern object', () => {
    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
    console.log(intern);
    
    expect(intern.name).toBe(expect.any(answers));
    expect(intern.employeeId).toBe(expect.any(answers));
    expect(intern.email).toBe(expect.any(answers));
    expect(intern.school).toBe(expect.any(answers));
    expect(intern.role).toBe('Intern');

});
