const Engineer = require("../lib/Engineer");

test('engineer object', () => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    console.log(engineer);
    expect(engineer.github).toEqual(expect.any(String));

});