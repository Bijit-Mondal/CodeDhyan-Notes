---
title: Introduction to C Programming 0
topic: C
preview: Welcome to C Programming...
img: DSA/c.png
alt: C Transaparent Image
linkImg: DSA/c.png
linkImgAlt: C Transparent Image
---

## Welcome to C Programming.

**Topic:**
Introduction to C Programming

**Prerequisite:**
Basic Mathematics and basic logical reasoning. No prior programming knowledge is required.

**Note:**
In this blog, I’ll help you to learn programming in C. Note that this blog will help you learn, this is neither a standalone course, nor I am a teacher. So use this blog alongside your regular classes for results. Think of me as not a teacher, but a senior. Don’t hesitate to ask doubts, or point out mistakes (if i do, I normally don’t!).

Welcome to blog 0 of C programming. In the world of programming, the start is 0, not 1. You will learn the reason in future

A computer is an amazing thing in day to day life. We all have used it or at least seen/heard about it. A computer is a very powerful machine that can solve many different kinds of problems if given proper instructions. Programming is all about properly giving instructions to a computer. The better you can give the instruction, the better programmer you are. So if you read this far, you have made up your mind to become a wizard who can command over the magical (physics students hate this word but I’ll use it anyway) things called computers with the magic of programming.


### So what is and why C?
C is a programming language created by Dennis Ritchie in 1972. And from the start, C started getting famous bit by bit. And today, C is almost everywhere you see. Sounds like a lie right? Actually no, behind almost every framework, OS, Kernel, Database, games embedded system are either written or dependant on C.

C will never be in "Top 10 languages to learn in 202x" or "Top 5 languages to get paid most" because of the faulty oversimplifications of news channels. C should be the first step towards the world of programming. Here are few reasons-

- C is a low level language. It interacts with memory direectly. It doesn't create a virtual environment to run. So it is very fast. For this reason many framework and other thingd mentioned previously are written in C. Even many languages are written in C. So in almost every branch of C, your knowledge of C will be useful.
- Don't trust the hype. Other languages come and go, but C will be always there. Memes will always portray C as the old, complex and unnecessary old man. But remove C from the world and world will come to end. Once you learn C, it will be your faithful flashlight everywhere. Almost in every branch you dive into, knowledge of C will be useful.
- Once you understand C, and basic OOPs(Knowledge of C will also help here), you can easily learn other language easily. But this is not true for other langauges. You can easily find these stories easily on the internet. C shows you what a program is actually doing instead of covering the complexity of abstraction. Sure when compared to **Python** code, C seems unnecessarily complex. But learning other langauge after python will not be a good ride, many things won't make sense. On the other hand, after C, all the other langauge will seem as C in different dress(with OOPs of course, but C is still the main component).

### How we execute a C program
A C program is run in two stepa. First a C compiler compiles teh code and generates an executable file. The extension of this executable differs from OS to OS. 
For the first step, we need a text editor and C compiler. A compiler is a special program which translates a C program in machine code. There are many different compilers for C language, but in this blog, we will stick to the standard **GNU GCC** compiler. Note that this blog won't give you tutorial to set up C compiler. It'll just show you how to search it. And other thing, I don't know anything about apple related OS, so I'll just help Windows and Linux friends.

The easiest way to run C progras is to get an IDE(Integrated Development Environment) like Codeblocks. This will make your job very easy, you won't have to set up things. But IDEs are bulky. So here goes the long process.

#### Windows: 
1. Download and install MinGW. Search how to to do it, read tutorial or watch a tutorial video. Don't forget to adding to PATH part.
2. Now that you have got the compiler working, you need a text editor. There is already Notepad, it works fine. If you want some more facilities, install VS Code and install necessary extensions(Search it up!). There are other good editors too, but I'll suggest starting with it. You can always experiment later.

#### Linux:
1. You don't need to do anything for C compilers if you are working in any Linux OS, because it is already in there.
2. As a text editor, there are many options. Maybe there is some preinstalled editor, gedit is fine. Or you can use VS Code too.
   
#### Now to creating a program and running:
1. Open your editor, create a new file and save it with extension **.c**. Write your program(We'll get to it from next blog)
2. Open terminal, go to the directory where you have saved your code. write 
    ```sh 
    gcc FileName.c
    ```
    if the name is hello.c, it will be 
    ```sh
    gcc hello.c
    ```
    This will create a executable file called _a.exe_(Windiws) or _a.out_(Linux) from your C code.

3. This is an extra wisdom which is not really necessary but maybe useful. You can skip this part if you are getting bored. You see the output file name is _a_ with extension, you can change it with this extra step. If you write 
    ```sh
    gcc -o OutputFileNameWithExtension CProgramName.c
    ```
    it will generate executable with your suggested name.
4. Now that you have got the executable, run it with _./a.out_ for linux and _a.exe_ for windows. Here **a** is your executable file name.

Now that you have done your preparations, we will dive into actually learning to write a C Program
