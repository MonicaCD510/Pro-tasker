# Pro-Tasker

## Overview

Pro-Tasker is a full-stack task management application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to register, log in securely, and manage their personal tasks through a simple and user-friendly interface.

This project demonstrates full-stack development concepts including frontend and backend integration, RESTful APIs, MongoDB database management, authentication, deployment, and version control using GitHub.

## Features

* User Registration
* User Login
* JWT Authentication
* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* MongoDB Database Integration
* Frontend and Backend Deployment on Render

## Technologies Used

### Frontend

* React
* Vite
* JavaScript
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt

### Deployment

* Render
* GitHub

## Repositories

### Frontend Repository

https://github.com/MonicaCD510/Pro-tasker-frontend

### Backend Repository

https://github.com/MonicaCD510/Pro-tasker

## Live Application

### Frontend Deployment

https://pro-tasker-frontend-yolr.onrender.com

### Backend Deployment

https://pro-tasker-1w72.onrender.com

## Installation

### Clone the repositories

Frontend:

```bash
git clone https://github.com/MonicaCD510/Pro-tasker-frontend.git
```

Backend:

```bash
git clone https://github.com/MonicaCD510/Pro-tasker.git
```

### Install dependencies

Frontend:

```bash
cd Pro-tasker-frontend
npm install
```

Backend:

```bash
cd Pro-tasker
npm install
```

### Run the application

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm start
```

## API Routes

### User Routes

Register User

```http
POST /api/users/register
```

Login User

```http
POST /api/users/login
```

### Task Routes

Get All Tasks

```http
GET /api/tasks
```

Create Task

```http
POST /api/tasks
```

Update Task

```http
PUT /api/tasks/:id
```

Delete Task

```http
DELETE /api/tasks/:id
```

## User Workflow

1. Users create an account.
2. Users log in using their credentials.
3. Users create tasks.
4. Users view their task list.
5. Users update existing tasks.
6. Users delete completed tasks.
7. Data is stored in MongoDB Atlas.

## Challenges

One of the primary challenges during development was configuring communication between the frontend and backend after deployment. Additional challenges included MongoDB Atlas connectivity, environment variable configuration, and deployment troubleshooting using Render.

## Future Enhancements

* Task priorities
* Due dates
* Task categories
* Search and filtering
* Improved user interface

## Author

Monica Davila
