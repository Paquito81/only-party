const Intern = require('./Intern');

test('intern object', () => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    console.log(intern);
   
    expect(intern.school).toEqual(expect.any(String));
});