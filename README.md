# Critical Thinking

Author: Kristina Nikolic

CriticalThinking is a simple and clean-design blog web application implemented
with Spring Boot on the back-end side and Angular on the front-end. Users can
read articles and filter it by keyword and category. There is an admin
dashboard, where articles can be added, edited, published and deleted.

![Main page](https://i.imgur.com/WWVajfE.png)

![Main page](https://i.imgur.com/ARNJCK7.png)

![Main page](https://i.imgur.com/MyyOVRB.png)

![Main page](https://i.imgur.com/egLwVwH.png)

![Main page](https://i.imgur.com/YdfU7dz.png)

![Main page](https://i.imgur.com/1slW6ZI.png)

![Main page](https://i.imgur.com/wSi8Auh.png)

![Article page](https://i.imgur.com/HtkvE09.png)

![Article page](https://i.imgur.com/4HJGIPt.png)

![Login page](https://i.imgur.com/7lNGxmd.png)

![Admin page](https://i.imgur.com/FkC2uW9.png)

![Admin page](https://i.imgur.com/FF6pZEw.png)

![Add new article page](https://i.imgur.com/S3odGvd.png)

![Publish article page](https://i.imgur.com/Z2vGdMx.png)

![Error page](https://i.imgur.com/m51Ojun.png)

![Mobile main page](https://i.imgur.com/ShLO5Qi.png)

![Responsive menu](https://i.imgur.com/A7v5vph.png)

![Responsive main page](https://i.imgur.com/3j7MSds.png)

![Responsive menu](https://i.imgur.com/p00PkxU.png)

## Prerequisites

JDK 8

Maven 3.6.3

MySQL 8.0.21

## Installing

Please install MySQL service software from <https://www.mysql.com/> and start
MySQL before running the application and then

create database critical_thinking;

Change MySQL username and password as per your MySQL installation

open src/main/resources/application.properties file.

change spring.datasource.username and spring.datasource.password properties as
per your mysql installation.

This is a Maven project. Make sure Maven is installed in your machine. Try mvn
-v command. Otherwise install from <http://maven.apache.org/download.cgi.> I
recommend you import the source code into Eclipse IDE to edit the code.

You can run the app using

mvn spring-boot:run

The app will start running at <http://localhost:8080.>

Use sql queries given in .sql file to insert data in previously created database
schema. Insert categories and user credentials. Admin username is admin, password is 12345.
"# svojom-glavom" 
"# critical-thinking" 
