---
title: 08. Keywords in Java
topic: Java
preview: A keyword is a reserved words that have a predefined meaning in the language...
img: DSA/java.png
alt: Java Transparent Image
linkImg: DSA/java.png
linkImgAlt: Java Transparent Image
sidebar: true
---
# Keywords in Java
Java programming language has over 50 reserved keywords which have special meaning for the compiler and cannot be used as variable names. Following is a list of Java keywords - 
| Keyword       | Description                                                                                                     |
|---------------|-----------------------------------------------------------------------------------------------------------------|
| `abstract`    | Used to declare abstract classes and methods.                                                                     |
| `assert`      | Asserts a condition.                                                                                             |
| `boolean`     | Represents true or false values.                                                                                 |
| `break`       | Jumps out of a loop or a switch statement.                                                                        |
| `byte`        | Represents an 8-bit signed integer value.                                                                         |
| `case`        | Marks a block of code in switch statements.                                                                       |
| `catch`       | Catches exceptions generated by try statements.                                                                   |
| `char`        | Represents a single 16-bit Unicode character.                                                                     |
| `class`       | Defines a class.                                                                                                 |
| `const`       | Reserved for future use.                                                                                          |
| `continue`    | Skips the current iteration of a loop.                                                                            |
| `default`     | Specifies default statements in switch cases.                                                                     |
| `do`          | Starts a do-while loop.                                                                                           |
| `double`      | Represents a double-precision 64-bit floating-point number.                                                       |
| `else`        | Used with if statements to execute code when the condition is false.                                              |
| `enum`        | Declares an enumerated (enum) type.                                                                               |
| `extends`     | Indicates a class is derived from another class or interface.                                                      |
| `final`       | Used to restrict the inheritance of a class, method, or variable.                                                  |
| `finally`     | Used with try-catch to create a block of code that is always executed.                                             |
| `float`       | Represents a single-precision 32-bit floating-point number.                                                        |
| `for`         | Creates a for loop.                                                                                               |
| `goto`        | Reserved for future use.                                                                                          |
| `if`          | Executes code based on a specified condition.                                                                     |
| `implements`  | Indicates that a class implements an interface.                                                                    |
| `import`      | Allows the inclusion of classes and packages from other files.                                                     |
| `instanceof`  | Checks if an object is an instance of a specified class or interface.                                              |
| `int`         | Represents a 32-bit signed integer value.                                                                         |
| `interface`   | Defines an interface.                                                                                             |
| `long`        | Represents a 64-bit signed integer value.                                                                         |
| `native`      | Specifies that a method is implemented in platform-dependent code.                                                 |
| `new`         | Creates new objects.                                                                                              |
| `package`     | Groups related classes and interfaces.                                                                            |
| `private`     | Restricts access to members within the same class.                                                                 |
| `protected`   | Restricts access to members within the same package or subclasses.                                                 |
| `public`      | Provides unrestricted access to members.                                                                          |
| `return`      | Exits a method and optionally returns a value.                                                                     |
| `short`       | Represents a 16-bit signed integer value.                                                                         |
| `static`      | Associates a method or variable with the class rather than with individual instances.                              |
| `strictfp`    | Restricts floating-point calculations to ensure portability.                                                        |
| `super`       | Refers to the immediate parent class of an object.                                                                 |
| `switch`      | Selects statements to execute based on a value.                                                                    |
| `synchronized`| Controls access to code for multiple threads.                                                                      |
| `this`        | Refers to the current object in a method or constructor.                                                           |
| `throw`       | Throws an exception manually.                                                                                      |
| `throws`      | Indicates that a method may throw specified exceptions.                                                            |
| `transient`   | Indicates that a field should not be serialized.                                                                   |
| `try`         | Creates a block of code in which exceptions may occur.                                                             |
| `void`        | Indicates that a method does not return any value.                                                                 |
| `volatile`    | Indicates that a variable can be modified asynchronously.                                                          |
| `while`       | Creates a loop that continues until the specified condition is false.                                              |

:::tip Notes
- `const` and `goto` are resevered words but not used.
- `true`, `false` and `null` are literals, not keywords.
- Since Java 8, the `default` keyword is also used to declare default methods in interfaces.
- Since Java 10, the word `var` is used to declare local variables (local variables type inference). For backward compatibility, you can still use var as variable names. So var is a reserved word, not keyword.
- all keywords are in lower-case.
:::

The keywords in Java can be grouped as follows
- **Access modifiers** - `private`,`protected`,`public`
- **Class, method, variable modifiers** - `abstract`, `class`, `default`, `extends`, `final`, `implements`, `interface`, `native`, `new`, `static`, `strictfp`, `synchronized`, `transient`, `var`, `record`, `volatile`
- **Flow control:** - `break`, `case`, `continue`, `default`, `do`, `else`, `for`, `if`, `instanceof`, `return`, `switch`, `while`, `yield`
- **Package control** - `boolean`, `byte`, `char`, `double`, `float`, `int`, `long`, `short`
- **Error handling** - `assert`, `catch`, `finally`, `throw`, `throws`, `try`
- **Enumeration** - `enum`

As you begin using these keywords, familiarity will naturally develop, eliminating the need to memorize them all. Dont memorize..