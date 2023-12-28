---
title: 06. Variables in Java
topic: Java
preview: A variable is a name given to a memory location...
img: DSA/java.png
alt: Java Transparent Image
linkImg: DSA/java.png
linkImgAlt: Java Transparent Image
sidebar: true
---
# Variables in Java
A variable is a name given to a memory location. It is the basic unit of storage in a program, a variable is a value that can change, depending on conditions or on information passed to the program. With the help of variables, we can refer to the **objects** or the **value** and use them throughout the program. The variable in java has a `data type`  a `name` and a `value`. The data type of the variable specifies the type of value that can be stored in the variable such as `Integer`, `Boolean`, `Double` or `String` value. The name will be used to refer to the variable in the code and the value is the data that is stored in the variable.

```java
int num = 10;
```
Data Type - `int`\
Variable Name - `num`\
Value - `10`

**Example** - 
```java
public class Variables{
    public static void main(String[]args){
        int n = 10;
        System.out.println(n);
    }
}
```
**Output** - \
`10`

## Rules for Declaring Variable
- **Valid Characters :** Variable names can include letters (A-Z, a-z), digits (0-9), dollar sign ($), and underscore (_).
- **Must Start with a Letter or $ or _ :** The first character of a variable name must be a letter, dollar sign \$, or underscore (_). 
- **Cannot be a Reserved Keyword :** Variable names cannot be a reserved Java keyword.
- **Case-Sensitivity :** Java is case-sensitive, so variable names differing only in case are considered different.
- **No Spaces or Special Characters :** Variable names cannot contain spaces or special characters like !, @, #, %, etc. 

## Types of Variable
There are three types of variable present in java
- Local Variable
- Instance Variable
- Class or Static Variable

We will discuss about these types in later articles. 