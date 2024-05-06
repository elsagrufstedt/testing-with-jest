const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

// Mitt enhetstest
test('size returns the correct size of the stack', () => {
    // Lägg till tre element i stacken
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // Ta bort ett element från stacken
    stack.pop();

    // Verifiera att storleken minskar med 1
    expect(stack.peek()).toBe(5); // Medvetet fel
});