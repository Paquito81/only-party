const Employee = require('../lib/Employee');

test('employee name', () => {
    const employee = new Employee(answers.name, answers.id, answers.email);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});