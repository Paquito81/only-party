const Teammanager = require("lib/Teammanager.js");

test('teammanager object', () => {
    const teammanager = new Teammanager(answers.name, answers.employeeId, answers.email, answers.office);
    console.log(teammanager);
    
    expect(teammanager.name).toBe(expect.any(answers));
    expect(teammanager.employeeId).toBe(expect.any(answers));
    expect(teammanager.email).toBe(expect.any(answers));
    expect(teammanager.office).toBe(expect.any(answers));
    expect(teammanager.role).toBe('Teammanager');

});
