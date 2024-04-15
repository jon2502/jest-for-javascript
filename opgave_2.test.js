const Person = require('./opgave_2/opgave_2.js');
const data = ['Brandr','Svensson','30-04-1997','amber']
let Brandr = new Person ('Brandr','Svensson','30-04-1997','amber');
test('person age', () =>{
    expect(Brandr.setdob('30-04-1997')).toBe(true)
})
test('person age wrong', () =>{
    expect(Brandr.setdob('32-ab-1800')).toBe(false)
})
test('person age to long date month and year', () =>{
    expect(Brandr.setdob('4323-534-180065')).toBe(false)
})
test('first name', () =>{
    expect(Brandr.setfname('test+01')).toBe(false)
})
test('last name', () =>{
    expect(Brandr.setlname('Svensson')).toBe(true)
})