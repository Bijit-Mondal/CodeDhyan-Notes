---
title: Introduction to CP
topic: CP
preview: Introduction to CP
img: DSA/cp_img.png
alt: CP Image
linkImg: DSA/cp_img.png
linkImgAlt: CP Image
---

# Introduction to CP

## What is CP?
Competitive Programming, popularly known as CP, is a mind sport where people compete to solve algorithmic challenges within a given time limit using some programming language of their choice.

## Why should you do CP?
Well, because its fun! Moreover, doing CP helps improve your problem solving skills, which is always helpful.

## Prerequisites for doing CP
You should possess some basic problem solving skills and know the basics of some programming language, and you are good to go!

## CP problems
In a given algorithmic contest, most of the time, you will be required to solve as many problems as possible within a given time limit. Thus it is important to know what exactly a CP problem is, and how to go about solving it.
There are multiple parts of a CP problem, which are as follows - 
### The problem statement
The problem statement informs you about what exactly is the algorithmic problem that you are required to solve. Often problem statements contain algorithmic problems disguised as stories, from which you need to deduce the problem. Other times, they are more straightforward and just tell you the algorithmic problem that you are required to solve.
### Constraints
A CP problem often mentions the constraints of the input data. These are the limits associated with the data provided as input to the problem. As a competitive programmer, the constraints will help you to decide whether some algorithms may or may not work depending upon the constraints on the input data.
### Time and memory limits
There are always different time limits, and sometimes, memory limits associated with a problem. These refer to the maximum amount of time that your program can take before it is terminated, and the maximum memory that your program can occupy during *execution*. If your program takes more time than it is permitted to execute for, then you'll get a time limit exceeded (TLE) verdict, and if it takes more memory than it is permitted, you'll get a memory limit exceeded (MLE) or sometimes even a runtime error (RE) verdict.

## CP solutions
To solve a problem, you need to write a solution  in a programming language of your choice. The most popular programming language among competitive programmers in C++, but many people use languages like Java, Python and Kotlin too. <br>
In some platforms, the time limit is marginally adjusted depending on the programming language that you use, because some languages (like Python and Java) are marginally slower than others (like C++). <br>
One major difference between writing programs say in your classroom / for your practice problems is that unlike most practice problems, you do NOT have to write prompts for competitive programming problems. (By prompts I mean statements like "Please enter a number", "The answer is", etc.) This is because of the way in which solutions are evaluated in CP. <br>

## Evaluation of solutions
In CP, the solutions are evaluated by an automated checker, not by a human being. This means that the input and output format of your solution should correspond EXACTLY with the input and output formats specified in the problem statement. Even a wrong character might cause a difference in verdicts, because the evaluation is automated and not manual.
When you submit a solution, the checker runs your programs on some hidden test cases, and then compares the output of your program with the expected output. Depending on this, you will receive different kinds of verdicts.
### Different types of verdicts in CP
* **Accepted (AC)** - This is the coveted green tick verdict, the most desired verdict among competitive programmers. If you receive an AC verdict, congratulations, it means that your solution is correct!
In some problems, there may be points awarded even if your program does not pass all the test cases, but passes some of them. It is called a *partially accepted* verdict.
* **Wrong Answer (WA)** - This means that your program did not produce the output expected by the judge for some test case, instead it produced a different output.
* **Runtime Error (RE)** - This verdict can be caused due to various reasons. Some of the most popular issues that cause RE are: stack overflow, array index out of bounds, division by zero, etc.
* **Time Limit Exceeeded (TLE)** - This means that your program did not produce an output within the specified time limit. This usually happens when an algorithm with inferior time complexity than expected is used. *A good thing to keep in mind is that modern computers can perform roughly $10^7$ operations per second.*
* **Memory Limit Exceeded (MLE)** - This means that your program used more memory during execution than was permitted. Some online judges give the RE verdict even for MLEs.
* **Compilation error (CE)** - This means that your program failed to compile.

## CP contests
There are mainly two different types of contest formats in CP. Though these are the two most popular formats, there can be other different formats too. The two most popular contest formats are:
* **ICPC format** - This format follows the contest format of ICPC (International Collegiate Programming Competition). Here contestants are ranked by most number of problems solved, ties are broken by the time taken to solve those problems. Almost always, problems in ICPC format contests have binary verdict (that is, there is no partial scoring), and for each non-AC verdict, there is some associated time penalty.
* **IOI format** - This format follows the contest format of IOI (International Olympiad in Informatics). Here too, contestants are ranked by most number of problems solved, ties are broken by the time taken to solve those problems. However, there may be partial scoring for problems in IOI-style contests, and there is no time penalty associated with non-AC verdicts.

## Where to practice CP and compete in contests?
There are many different platforms where you can practice CP problems and compete in online contests. Some of the most popular platforms are - 
* **Codeforces** (<a href="https://codeforces.com"> codeforces.com </a>) (Practice and Compete | most popular CP website | completely free)
* **CodeChef** (<a href="https://www.codechef.com/"> codechef.com </a>) (Practice and Compete | freemium website but contests are still good)
* **AtCoder** (<a href="https://atcoder.jp/"> atcoder.jp </a>) (Practice and Compete | good for math-oriented problems)
* **HackerRank** (<a href="https://www.hackerrank.com/"> hackerrank.com </a>) (Practice | good for absolute beginners)
* **CSES** (<a href="https://cses.fi/problemset"> cses.fi/problemset </a>) (Practice | good for practicing standard algorthims)
and many more. You can keep track of different CP contests that are happening currently using the **CLIST** (<a href="https://clist.by/"> clist.by </a>) website.

## Some popular CP contests
There are regular online contests held at the above mentioned websites, and on many others. I'm however mentioning some of the more popular and prestigious CP contests, if you want to know about them in details, you will find information in much more details on the interenet. <br>
**ICPC** (team contests for college students), **IOI** (for school students), **Meta Hacker Cup**. <br>
Sometimes different colleges and universities organize offline onsite CP contests as part of their tech fests, so also try to lookout for those.
