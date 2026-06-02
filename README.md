# Pro-Tasker

Pro-Tasker is a MERN project management application that allows users to register, log in, create projects, and manage tasks.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- React

## Backend Features

- User registration
- User login
- Password hashing
- JWT authentication
- Protected routes
- Project CRUD
- Task CRUD

## API Endpoints

### Users
POST /api/users/register  
POST /api/users/login  

### Projects
POST /api/projects  
GET /api/projects  
GET /api/projects/:id  
PUT /api/projects/:id  
DELETE /api/projects/:id  

### Tasks
POST /api/tasks/project/:projectId  
GET /api/tasks/project/:projectId  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

## Environment Variables

Create a .env file with:

PORT=3000  
MONGODB_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  

## Run Locally

npm install  
node server.js