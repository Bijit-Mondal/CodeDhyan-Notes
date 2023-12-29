---
title: 09. Operators in Java
topic: Java
preview: Operators are special symbols that perform specific operations on one, two, or three operands and return a result...
img: DSA/java.png
alt: Java Transparent Image
linkImg: DSA/java.png
linkImgAlt: Java Transparent Image
sidebar: true
---
# Operators in Java
Operators are symbols that perform operations on variables and values. The Java programming language has around 30 operators

| Category           | Operators                                     |
|--------------------|-----------------------------------------------|
| Arithmetic         | `+`, `-`, `*`, `/`, `%`                        |
| Assignment         | `=`, `+=`, `-=`, `*=`, `/=`, `%=`             |
| Unary              | `+`, `-`, `++`, `--`                                     |
| Relational         | `==`, `!=`, `>`, `<`, `>=`, `<=`               |
| Conditional            | `&&`, `||`, `!`                                |
| Bitwise            | `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`           |
| Ternary            | `? :` (It is a Relational Operator too)          |
| instanceof         | `instanceof`       |

1. **Arithmetic operators** - Arithmetic operators are used to perform arithmetic operations on variables and data. 

    | Operator | Operation          |
    |----------|--------------------|
    | `+`      | Addition  (and strings concatenation)            |
    | `-`      | Subtraction        |
    | `*`      | Multiplication     |
    | `/`      | Division           |
    | `%`      | Modulo (Remainder) |

    *Example* 
    ```java
    public class ArithmeticExample {
        public static void main(String[]args) {
            int x = 10;
            int y = 20;
     
            int result = x + y;
            System.out.println("x + y = " + result);
     
            result = x - y;
            System.out.println("x - y = " + result);
     
            result = x * y;
            System.out.println("x * y = " + result);
     
            result = y / x;
            System.out.println("y / x = " + result);
     
            result = x % 4;
            System.out.println("x % 4 = " + result);
        }
    }
    ```
    *Output* - 
    ```
    x + y = 30
    x - y = -10
    x * y = 200
    y / x = 2
    x % 4 = 2
    ```
2. **Assignment Operator** - It assigns the value on its right to the operand on its left.
    
    | Operator | Operation               | Syntax               | Output (Example)       |
    |----------|-------------------------|----------------------|------------------------|
    | `=`      | Assigns value           | `variable = value;`  | `x = 5;` (Assigns 5 to x)|
    | `+=`     | Adds and assigns        | `variable += value;` | `x += 3;` (Equivalent to `x = x + 3;`) |
    | `-=`     | Subtracts and assigns   | `variable -= value;` | `x -= 2;` (Equivalent to `x = x - 2;`) |
    | `*=`     | Multiplies and assigns  | `variable *= value;` | `x *= 4;` (Equivalent to `x = x * 4;`) |
    | `/=`     | Divides and assigns     | `variable /= value;` | `x /= 2;` (Equivalent to `x = x / 2;`) |
    | `%=`     | Modulo and assigns      | `variable %= value;` | `x %= 3;` (Equivalent to `x = x % 3;`) |

    *Example* - 
    ```java
    int x = 10;
    x += 5; // Adds 5 to x (x = x + 5)
    System.out.println("x = " + x); // Output: x = 15

    x -= 3; // Subtracts 3 from x (x = x - 3)
    System.out.println("x = " + x); // Output: x = 12

    x *= 2; // Multiplies x by 2 (x = x * 2)
    System.out.println("x = " + x); // Output: x = 24

    x /= 4; // Divides x by 4 (x = x / 4)
    System.out.println("x = " + x); // Output: x = 6

    x %= 5; // Calculates x modulo 5 (x = x % 5)
    System.out.println("x = " + x); // Output: x = 1
    ```
3. **Unary Operator** - The unary operators involve in only a single operand

    | Operator | Operation          | Syntax          | Output (Example)        |
    |----------|--------------------|-----------------|-------------------------|
    | `+`      | Unary plus         | `+variable;`    | `+x;` (Returns the value of x) |
    | `-`      | Unary minus        | `-variable;`    | `-x;` (Returns the negative value of x) |
    | `++`     | Pre-increment      | `++variable;`   | `++x;` (Increments x before its value is used) |
    | `--`     | Pre-decrement      | `--variable;`   | `--x;` (Decrements x before its value is used) |
    | `++`     | Post-increment     | `variable++;`   | `x++;` (Increments x after its value is used) |
    | `--`     | Post-decrement     | `variable--;`   | `x--;` (Decrements x after its value is used) |

    *Example* - 
    ```java
        int x = 10;
        
        System.out.println("Unary Plus (+x): " + (+x));          // Output: 10
        System.out.println("Unary Minus (-x): " + (-x));         // Output: -10
        
        System.out.println("Pre-increment (++x): " + (++x));     // Output: 11
        System.out.println("After Pre-increment, x: " + x);      // Output: 11
        
        System.out.println("Pre-decrement (--x): " + (--x));     // Output: 10
        System.out.println("After Pre-decrement, x: " + x);      // Output: 10
        
        System.out.println("Post-increment (x++): " + (x++));     // Output: 10
        System.out.println("After Post-increment, x: " + x);      // Output: 11
        
        System.out.println("Post-decrement (x--): " + (x--));     // Output: 11
        System.out.println("After Post-decrement, x: " + x);      // Output: 10    
    ```
4. **Relational Operators** - Relational operators are used to check the relationship between two operands.

    | Operator | Description                                 | Example          | Output       |
    |----------|---------------------------------------------|------------------|--------------|
    | `==`     | Checks if two operands are equal.            | `3 == 5`         | `false`      |
    | `!=`     | Checks if two operands are not equal.        | `3 != 5`         | `true`       |
    | `>`      | Checks if the left operand is greater than the right operand. | `3 > 5`  | `false`      |
    | `<`      | Checks if the left operand is less than the right operand.    | `3 < 5`  | `true`       |
    | `>=`     | Checks if the left operand is greater than or equal to the right operand. | `3 >= 5` | `false`  |
    | `<=`     | Checks if the left operand is less than or equal to the right operand.    | `3 <= 5` | `true`   |

    *Example* - 
    
    ```java
    int x = 10;
    int y = 20;

    boolean  result = x==y;
    System.out.println("x == y? " + result); // Output: x == y? false

    result = x!=y;
    System.out.println("x != y? " + result); // Output: x != y? true

    result = x>y;
    System.out.println("x > y? " + result); // Output: x > y? false

    result = x>=y;
    System.out.println("x >= y? " + result); // Output: x >= y? false

    result = x < y;
    System.out.println("x < y? " + result); // Output: x < y? true

    result = x <= y;
    System.out.println("x <= y? " + result); // Output: x <= y? true
    ```
5. **Conditional Operators** - Conditional operators are used to check whether an expression is true or false. They are used in decision making.
    | Operator | Description                                         | Syntax       |
    |----------|-----------------------------------------------------|----------------------|
    | `&&`     | Logical AND operator; true only if both expressions are true. | `expression1 && expression2` |
    | `||`     | Logical OR operator; true if at least one expression is true. | `expression1 || expression2` |
    | `!`      | Logical NOT operator; reverses the logical state of the operand. | `!expression`        |

    *Example* - 
    ```java
    public class ConditionalExample {
        public static void main(String[] args) {
            int x = 10;
            int y = 20;
     
            if((x > 8) && (y > 8)){ // true
                System.out.println("Both of the x and y are greater than 8");
            }
            if((x> 10) && (y > 10)){ // false
                System.out.println("Both pf the x or y or both is greater than 10");
            }
            if((x > 10) || (y > 10)){ // true
                System.out.println("Either x or y or both is greater than 10");
            }
        }
    }
    ```
    *Output* - 
    ```
    Both of the x and y are greater than 8
    Either x or y or both is greater than 10
    ```
    :::tip Short-Circuit Evaluation
    - If the left operand of `&&` is `false`, the overall result will be `false` regardless of the right operand's value. Hence, the right operand will not be evaluated because both operands must be `true` for the result to be `true`.
    - If the left operand of `||` is `true`, the overall result will be `true` regardless of the right operand's value. Hence, the right operand will not be evaluated because only one `true` operand is required for the result to be `true`.

    :::
6. **Bitwise Operators** - These operators perform bitwise and bit shift operations on only integral types, not on float types. They are rarely used.

    | Operator | Meaning                                 | Example              | Result     |
    |----------|-----------------------------------------|----------------------|-----------------------|
    | `&`      | Bitwise AND; performs a bitwise AND operation. | `x & y`           | `5 & 3` = `1`         |
    | `|`      | Bitwise OR; performs a bitwise OR operation.   | `x | y`          | `5 | 3` = `7`        |
    | `^`      | Bitwise XOR; performs a bitwise XOR (exclusive OR) operation. | `x ^ y` | `5 ^ 3` = `6`  |
    | `~`      | Bitwise NOT; inverts the bits.              | `~x` or `~y`       | `~5` = `-6`           |
    | `<<`     | Left shift; shifts the bits to the left.    | `x << y`           | `5 << 1` = `10`       |
    | `>>`     | Right shift; shifts the bits to the right.  | `x >> y`           | `5 >> 1` = `2`        |
    | `>>>`    | Unsigned right shift; shifts right and fills with zero. | `x >>> y`    | `5 >>> 1` = `2`   |

    :::tip Note
    
    - **Left Shift (<<)** :  Shifting the bits to the left by `n` positions is equivalent to multiplying the number by $2^n$. For example, `x << y` shifts the bits of `x` to the left by `y` positions, which is equivalent to $x * 2^y$.
    - **Right Shift (>>)** : Shifting the bits to the right by `n` positions is equivalent to integer division by $2^n$ (for positive numbers). For example, `x >> y` shifts the bits of `x` to the right by `y` positions, which is equivalent to $x / 2^y$.
    :::

7. **Ternary Operator** - 
    ```java
    result = A ? B : C;
    ``` 
    This is interpreted like this: if A evaluates to true, then evaluates B and assign its value to the result. Otherwise, if A evaluates to false, then evaluates C and assign its value to the result. For short, we can say: If A then B else C. So this is also referred as shorthand for an if-else statement.

    *Example* - 
    ```java
    public class TernaryOperatorExample {
        public static void main(String[] args) {
            int x = 10;
            int y = 20;

            // Using ternary operator to find the maximum value between two numbers
            int max = (x > y) ? x : y;
            
            System.out.println("The maximum value between x and y is: " + max);
        }
    }
    ```
    *Output* - 
    ```
    The maximum value between x and y is: 20
    ```
    The ternary operator `(x > y) ? x : y;` checks if `x` is greater than `y`. If the condition `(x > y)` is true, it assigns the value of `x` to the variable `max`. Otherwise, it assigns the value of `y`.

8. **instanceof** - 
    The `instanceof` operator tests if an object is an instance of a class, a subclass or a class that implements an interface; and result in a boolean value.

    *Example* - 
    ```java
    public class InstanceOfExample {
        public static void main(String[] args) {
            Object obj = "Hello";

            // Using instanceof to check if obj is an instance of String
            if (obj instanceof String) {
                System.out.println("obj is an instance of String");
            } else {
                System.out.println("obj is not an instance of String");
            }
        }
    }
    ```
    *Output* - 
    ```
    obj is an instance of String
    ```