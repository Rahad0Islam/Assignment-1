# Generics in TypeScript

## Introduction

In TypeScript, Generics help developers create reusable and scalable code without losing type safety. They allow functions, interfaces, and components to work with multiple data types while still preserving the correct type information.

Instead of creating separate functions for every data type, Generics provide one flexible solution that stays strictly typed regardless of the data structure passed into it.

---

# Problem Without Generics

Without Generics, we often repeat the same logic for different types.

```ts
function getStr(val: string): string {
	return val;
}

function getNum(val: number): number {
	return val;
}
```

### Problems

* Same logic repeated
* Harder to maintain
* Not scalable for large projects

---

# Solution With Generics

Generics solve this problem using a placeholder type like `T`.

```ts
function getVal<T>(val: T): T {
	return val;
}
```

Now the same function works with any data type.

```ts
getVal<string>("Hello");
getVal<number>(10);
getVal<boolean>(true);
```

Here:

* `T` represents a type placeholder
* TypeScript automatically preserves the correct type

This means the function stays strictly typed regardless of the data structure passed in.

---

# How Generics Keep Functions Strictly Typed

Generics maintain the relationship between input and output types.

```ts
function check<T>(value: T): T {
	return value;
}
```

If we pass a string:

```ts
check("hello-world");
```

Then:

* Input type = `string`
* Return type = `string`

If we pass a number:

```ts
check(100);
```

Then:

* Input type = `number`
* Return type = `number`

The type always stays connected and consistent.

---

# Why Generics Are Useful

Generics make code:

* Reusable
* Flexible
* Strictly typed
* Easier to maintain

### Benefits in real projects

* Less duplicate code
* Better scalability
* Safer refactoring
* Better developer experience


# How Generics Improve Type Safety

Without Generics, developers often use `any`.

```ts
function getVal(val: any): any {
	return val;
}
```

### Problems with `any`

* Removes type safety
* Causes runtime errors
* Harder to debug

### Generics Fix This

Generics keep flexibility without losing safety.

TypeScript always knows:

* Input type
* Return type
* Structure of data

This helps prevent unexpected bugs.

---

# Conclusion

Generics allow developers to build reusable and flexible functions, interfaces, and components while keeping strict type safety.

### Key Takeaways

* Generics create reusable type-safe code
* `T` acts as a placeholder type
* Functions remain strictly typed for all data structures
* Works with functions, arrays, interfaces, and components

Generics are essential for building scalable and maintainable TypeScript applications.
