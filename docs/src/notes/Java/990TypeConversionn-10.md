---
title: 10 - Type Conversion in Java
topic: Java
preview: Type conversion is changing an expression from one data type to another...
img: DSA/java.png
alt: Java Transparent Image
linkImg: DSA/java.png
linkImgAlt: Java Transparent Image
sidebar: true
---
# Type Conversion
Java supports various data types for handling different kinds of values. like
- int for numbers without decimal points, like 10 or -12.
- double for numbers with decimal points, like 10.34 or -45.34.
- char for single characters, like 'c' or '4'.

Occasionally, there arises a need to convert data from one type to another, like transforming a `double` to an `int` or an `int` to a `double`. This process is known as type conversion.

## Types of Type Conversion
Java supports mainly two types of type conversion
1. **Implicit Conversion or Widening Conversion :**
    - The two data types are compatible.
    - Happens automatically when a smaller data type is assigned to a larger one.
    - No data loss occurs.
    ```mermaid
        flowchart LR
            1([byte]) --> 2([short])
            2 --> 3([int])
            3 --> 4([long])
            4 --> 5([float])
            5 --> 6([double])
    ```
    *Example* - 
    ```java
    class TypeConversion { 
        public static void main(String[]args) { 
            // create a int type variable
            int x = 42;
            // create a double type variable 
            double num; 
            // assign integer value to double 
            num = x; 
            System.out.println(num);
        } 
    }
    ```
    *Output* - 
    ```sh
    42.0
    ```
    In the above code, a integer variable `x` is created and assigned a value `42`, and a double variable called `num` is created and assigned integer `x` to it.

    Java automatically converted the integer value `42` to a double value `42.0`. That's why the output is `42.0`.

    This automatic type conversion is known as `Implicit Type Conversion` or `Widening Conversion`. 

    > What happened if a `Integer` variable is assign a `Double` value?  
    ```java
    class TypeConversion { 
        public static void main(String[]args) { 
            // create a int type variable
            int x = 42;
            // create a double type variable 
            double num; 
            // assign integer value to double 
            num = x; 
            int d = num;
            System.out.println(d);
        } 
    }
    ```
    *Output* - 
    ```
    error: incompatible types: possible lossy conversion from double to int
    ```
    Here, we are attempting to store the decimal value `42.0` into the integer variable `d`. However, in Java, an integer variable can't hold values with decimal points. So, converting a `double` (which can have decimals) to an int can cause a loss of data.

2. **Explicit Conversion or Narrowing Conversion :**
    - Requires manual casting to convert a larger data type to a smaller one.
    - Potential for data loss if the value doesn't fit in the smaller type.
    *Example* - 
    ```java
    class TypeConversion { 
        public static void main(String[]args) { 
            double pi = 3.14159;
            int roundPi = (int)pi;
            System.out.println(roundPi);
        } 
    }
    ```
    *Output* - 
    ```
    3
    ```
    In this code, the statement `(int)pi` explicitly converts the double value `pi = 3.14159` to an integer. Therefore, the double value is converted to the integer value 3. It's like rounding a number to the nearest whole number, even if some of the details are lost.