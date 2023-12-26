---
title: 04. Installing Java
topic: Java
preview: How to install Java on Windows, Linux...
img: DSA/java.png
alt: Java Transparent Image
linkImg: DSA/java.png
linkImgAlt: Java Transparent Image
sidebar: true
---

# Step 1: Installing Java

## Installation of java on Linux (Ubuntu)

One option for installing Java is to use the version packaged with Ubuntu. By default, Ubuntu 22.04 includes Open JDK 11, which is an open-source variant of the JRE and JDK.

1. To install the OpenJDK version of Java, first update your apt package index, Open the terminal and run the command:

```bash
sudo apt update && sudo apt upgrade -y
```

2. Confirm whether Java is already installed:
```bash
java -version
```
```
Command 'java' not found
```
3. Install the preferred release of OpenJDK using apt. 
```bash
sudo apt-get install openjdk-18-jdk
```
4. To install only the JRE component of OpenJDK, use the following command
```bash
sudo apt-get install openjdk-18-jre
```
5. Confirm the correct release of Java has been installed.
```bash
java -version
```
You will get the version of the installed java

6. If the full JDK platform is installed, confirm the version of the Java compiler.
```bash
javac -version
```
## Installation of java on Windows

1. Download and install from the below link

Click on the [link](https://aka.ms/download-jdk/microsoft-jdk-21.0.1-windows-x64.msi) and install the OpenJDK installer.

2. Open `Powershell` and check if java is installed
```cmd
java --version
```

## Installation of java on MacOS

1. Download and install from the below link

Click on the [link](https://aka.ms/download-jdk/microsoft-jdk-21.0.1-macOS-aarch64.pkg) and install the OpenJDK installer.

2. Open `terminal` and check if java is installed
```cmd
java --version
```
