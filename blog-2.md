# `Pick` and `Omit` in TypeScript

## Introduction

In large TypeScript projects, we often need smaller versions of a large interface. Writing the same properties repeatedly creates duplicate code and makes maintenance difficult.

TypeScript provides two useful utility types — `Pick` and `Omit` — to solve this problem.

These utility types help keep code **DRY (Don't Repeat Yourself)**, reusable, and easier to maintain.

---

# Master Interface

```ts
interface User {
	id: number;
	name: string;
	email: string;
	password: string;
	role: string;
}
```

Instead of creating multiple interfaces manually, we can reuse this main interface.

---

# `Pick` Utility Type

`Pick` selects only specific properties from an interface.

```ts
type UserProfile = Pick<User, "name" | "email">;
```

Result:

```ts
{
	name: string;
	email: string;
}
```

### Common Uses

* Profile page
* Public user information
* Small UI components

`Pick` helps create smaller “slices” of a large interface.

---

# `Omit` Utility Type

`Omit` removes specific properties from an interface.

```ts
type SafeUser = Omit<User, "password">;
```

Result:

```ts
{
	id: number;
	name: string;
	email: string;
	role: string;
}
```

### Common Uses

* API responses
* Frontend user objects
* Hiding sensitive data

`Omit` is useful when some fields should not be exposed.

---

# Why This Prevents Code Duplication

Without `Pick` and `Omit`, developers often rewrite interfaces manually.

```ts
interface UserProfile {
	name: string;
	email: string;
}
```

This creates repeated code.

If the original `User` interface changes, every copied interface must also be updated.

This can cause:

* Duplicate code
* Maintenance problems
* Inconsistent types
* More bugs

---

# How It Keeps Code DRY

`Pick` and `Omit` reuse the original interface instead of rewriting properties.

### Benefits

* Less duplicate code
* Easier maintenance
* Better consistency
* Safer refactoring
* Cleaner project structure

This makes large TypeScript projects easier to manage.

---

# Conclusion

* `Pick` → Select needed fields
* `Omit` → Remove unwanted fields

These utility types help create specialized versions of a master interface without duplicating code.

Using `Pick` and `Omit` keeps TypeScript code clean, reusable, and DRY.
