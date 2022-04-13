const Teammanager = require('../lib/Teammanager');

test('teammanager object', () => {
    const teammanager = new Teammanager(answers.name, answers.employeeId, answers.email, answers.office);
    console.log(teammanager);

    expect(teammanager.office).toEqual(expect.any(String));

});
