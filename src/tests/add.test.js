const add = (a, b) => a + b;
const generateGreeting = (name = 'stranger') => `Hello ${name}!`;

test('should add 2 nums', () => {
  const result  = add(2, 3);
  expect(result).toBe(5);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike!')
})

test('should generate greeting from no param', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello stranger!')
})