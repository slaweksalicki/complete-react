const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!!!`;

test('should add 2 numbers', () => {
  const result = add(3, 4);

  // if (result !== 7) {
  //   throw new Error(`You added 4 and 4. The result was ${result}. Expect 7.`)
  // }

  expect(result).toBe(7);
});

test('Should generate greeting from name', () => {
  const result = generateGreeting('Robb');
  expect(result).toBe('Hello Robb!!!');
});

test('Should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!!!');
})