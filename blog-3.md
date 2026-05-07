# Generics in TypeScript

## Introduction

Generics are one of the most powerful features in TypeScript. They allow you to write reusable functions and components that can work with different data types while still keeping strict type safety.

Instead of writing separate logic for each type, we can write one flexible and reusable solution.

---

# Problem Without Generics

When we don’t use generics, we often repeat code for different types.

```ts
function getString(value: string): string {
	return value;
}

function getNumber(value: number): number {
	return value;
}
```

### Problem:

* Same logic repeated
* Hard to maintain
* Not scalable

---

# Solution With Generics

Generics solve this by using a placeholder type (`T`).

```ts
function getValue<T>(value: T): T {
	return value;
}
```

Now the same function works for any type.

```ts
getValue<string>("Hello");
getValue<number>(10);
getValue<boolean>(true);
```

Here:

* `T` = placeholder type
* TypeScript automatically preserves the correct type

---

# Why Generics Are Useful

Generics make code:

* Reusable
* Flexible
* Strictly typed
* Easier to maintain

### Benefits in real projects:

* Less duplicated code
* Better scalability
* Safer refactoring

---

# Example With Arrays

Generics work very well with arrays.

```ts
function firstItem<T>(arr: T[]): T {
	return arr[0];
}
```

### Usage:

```ts
firstItem<number>([1, 2, 3]);
firstItem<string>(["a", "b", "c"]);
```

### Key idea:

The return type always matches the input type.

---

# Generic Interface Example

We can also use generics in interfaces.

```ts
interface Box<T> {
	value: T;
}
```

### Usage:

```ts
const numberBox: Box<number> = {
	value: 100,
};

const stringBox: Box<string> = {
	value: "Hello",
};
```

---

# How Generics Keep Type Safety

Without generics, people often use `any`:

```ts
function getValue(value: any): any {
	return value;
}
```

### Problem with `any`:

* No type safety
* Errors at runtime
* Hard to debug

### Generics fix this:

* Keep flexibility
* Keep strict type checking
* Prevent unexpected bugs

TypeScript always knows:

* Input type
* Return type
* Structure of data

---

# Conclusion

Generics allow us to write reusable and flexible code without losing type safety.

### Key takeaways:

* Generics = reusable type-safe code
* `T` = placeholder for type
* Works with functions, arrays, and interfaces

Generics are essential for building scalable and maintainable TypeScript applications.
