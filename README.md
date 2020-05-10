# CRScheduling

## [Contents](#contents)
* [Project Details](#details)
* [Introduction](#introduction)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [How to deploy](#deploy)
* [Technologies Incorporated & Architecture](#architecture) 
* [Conclusion](#conclusion)
* [References](#references)

| Project Details   |     |
| --- | --- |
| **Course** | BSc (Hons) in Software Development  |
| **Module** |  Applied Project and Minor Dissertation |
| **College** | [GMIT](http://www.gmit.ie/) Galway |
| **Student** | Cormac Raftery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G00348802 |
| **Project Supervisor** | Mr Gerard Harrison |
| **Module Supervisor** | Dr John Healy |

# Introduction<a name = "introduction"></a>
For my final year project I have decided to create a dynamic web-application that allows employees to easily view their schedule and allows employers to upload the schedule. I have been inspired to do this project due to working with a frustrating schedule website over the summer. The aim for this project is to have everything an employee or employer could need in one place.This Readme is only a short summary of the project while a much deeper look into the project is detailed in the Dissertation above.

# Features<a name = "features"></a>
This project provides an employer with a simple scheduling system for his employees.

# Prerequisites <a name = "prerequisites"></a>
Before launching the project you should ensure you have each of the following technologies installed.
Node v13.3.0
NPM v6.13.7
AngularCLI v9.0.3
MongoDB shell version v3.6.3
MongoDB version v3.6.3

# How to deploy<a name = "deploy"></a>
To deploy this product locally you can simply clone this repository and open up 3 command prompts. In the first command prompt you can go into the directory 4thYearProject, then Angular9crud and then Angular9crud again. In this folder you may run "npm install" provided you already have the angular CLI installed globally. You may then run "ng serve --open". In the second command prompt you can go to the same directory and provided you are connected to mongoDB using the MongoDB compass you can run "mongod". In the third command prompt you can go into the API directory and run "npm install express body-parser cors mongoose --save". You should then be able to launch the nodemon server with "nodemon server".

# Technologies Incorporated & Architecture<a name = "architecture"></a>
<p align="center"><img src="https://hackernoon.com/hn-images/0*Nq9iCe61Aq5IxUGl.png" width="400" height="250"></p>
This project is a three-tier application, using MongoDB as the Data Tier, Nodejs and express as the Logic Tier, and Angular 9 as the Presentation Tier. This project consists of technologies that are commonly know as the mean stack.

# Conclusion<a name = "conclusion"></a>
While the project did not reach all its original goals, it still provided basic functionality for a scheduling system. The security and layout of the project were poor. Using multiple technologies was very interesting trying to mesh them together and a lot was learned from the project.

# References<a name = "references"></a>
This is a collection of the references I used while developing the project.

https://cli.angular.io/

https://www.mongodb.com/

https://stackoverflow.com/questions/43721971/conditionally-disable-router-link-in-angular/43722687

https://stackoverflow.com/questions/56559996/how-to-prevent-default-click-behavior-of-a-routerlink-in-angular-app

https://stackoverflow.com/questions/48533227/angular-disable-submit-button-using-disabled-to-check-form-validity

https://superuser.com/questions/569085/pscp-is-not-recognized-as-an-internal-or-external-command-error/889479

https://stackoverflow.com/questions/5703552/css-center-text-horizontally-and-vertically-inside-a-div-block

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html

https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

https://jasonwatmore.com/post/2019/12/02/angular-nodejs-on-aws-how-to-deploy-a-mean-stack-app-to-amazon-ec2

https://appdividend.com/2020/02/24/angular-9-tutorial-how-to-build-angular-9-crud-app/

https://appdividend.com/2018/10/29/mongodb-crud-operations-tutorial-with-example/

https://appdividend.com/2017/09/23/angular-router-tutorial-example/

