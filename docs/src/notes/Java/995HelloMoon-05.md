---
title: 05. Java First Program
topic: Java
preview: A "Hello Moon" Program in Java...
img: DSA/java.png
alt: Java Transparent Image
linkImg: DSA/java.png
linkImgAlt: Java Transparent Image
sidebar: true
---
# Java First Program

A "Hello, Moon!" program is a basic code that displays the message "Hello, Moon!" on the screen. It's commonly used to introduce beginners to a new programming language and to check everything is installed and configured properly.

1. Open Code Editor of your choice and Create a file HelloMoon.java
```java
// This is a comment, it is for humans to read, not for the computer.
//
// This is the start of the program, it is called the class.
// The class name must match the file name.
public class HelloMoon{
    // This is the start of the program, it is called the main method.
    public static void main(String[]args){
        // This is a statement, it is a command for the computer to do something.
        // This statement prints the words "Hello Moon" to the screen.
       System.out.println("Hello Moon!");
    }
}
```
2. Open a terminal window, navigate to the directory where the Java source file is located and compile the Java source file using the javac command
```sh
javac HelloMoon.java
```

3. Once the source file is compiled, it will generate a `.class` file which can be executed by the **JVM**
```sh
java HelloMoon
```
4. The program will now execute and display any output in the terminal.
```
Hello Moon!
```

## Now Let's understand it step by step

- **Comments** - Comments are Humans to Read to understand the code, and the computer skips it. <br>
Single line comments start with two forward slashes `//`
```java
// This is a comment
System.out.println("Hello Moon"); // This is also a comment
```
Multi-line comments start with `/*` and ends with `*/`
```java
/*This is 
multi line 
comment*/
System.out.println("Hello Moon");
```
- **Class Definition** - The program starts with the definition of a class named `HelloMoon`. Think of a class as a container for your code.
- **Main Method** - Inside the class, there is a `main()` method. Every Java program needs a `main()` method because `JVM` uses it to begin the execution. There is no `object` of the class existing when the `Java Runtime` starts. This is why the `main()` method must be static for the `JVM` to load the class into memory and call the `main()` function. We use public keyword before the `main()` method so that `JVM` can identify the execution point of the program. If we use `private`, `protected`, and `default` before the `main()` method, it will not be visible to JVM. Too overwhelming? We will expand it in later articles.

- **Print Statement** - Inside the `main()` method, the line ```System.out.println("Hello Moon")``` makes the computer to print `Hello Moon` on the screen.

No problem if words like "class" or "method" seem tricky. As you learn more, these will become easier to understand. Think of this program as a friendly start to learning Java programming!