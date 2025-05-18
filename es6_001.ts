function sayHi(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

let greeting = sayHi("John", 30);
console.log(greeting); // Output: Hello John, you are 30 years old.

export {};
