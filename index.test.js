const sayHello = require('../hello');

test('should return "Hola Mundo"', () => {
    expect(sayHello()).toBe('Hola Mundo');
});
