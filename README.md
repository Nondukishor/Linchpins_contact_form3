# Linchpins Contact Form

A contact form with attachment for Linchpins.

---

## Requirements

### SMTP Configuration
To use Gmail SMTP, you have make your Gmail account less secure. To do that, click  [here](https://myaccount.google.com/lesssecureapps?pli=1)
Without configuration this, you can not send mail. [Read in details](https://nodemailer.com/usage/using-gmail/)

### Using Docker
Go to the root folder of project. 
Run the following command to build docker image. 

$ docker build -t <any_name_for_docker_image>  .
<sup> (don't forget the dot (.) in the end. </sup>

After that run the following command to start docker image and publish application in
port 80.

$ docker run -d -p 80:8000 <docker_image_name>

### Without Docker

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on CentOS

You can install nodejs and npm easily with apt install, just run the following commands.


$ yum install -y gcc-c++ make
$ curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -

$ sudo yum install nodejs

- #### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

$ node --version

v10.16.3

$ npm --version

6.9.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

$ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

$ npm install -g yarn

---

## Install

$ cd PROJECT_FOLDER

$ yarn install

## Running the project

$ yarn start

# Configure SMTP and Recipients 
Login to back-end dashboard by this following url,
http://your-domain/users/login
