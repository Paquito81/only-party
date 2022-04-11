const Engineer = require("lib/Engineer.js");

test('engineer object', () => {
    const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
    console.log(engineer);
    expect(engineer.github).toEqual(expect.any(String));

});