# Book Review API

A RESTful API for managing books and user reviews built using **Node.js**, **Express.js**, and **MongoDB**.



## Features

-  JWT-based User Signup & Login
-  Add & Retrieve Books (with filters and pagination)
-  Get Book Details with Average Rating & User Reviews
-  Submit / Update / Delete Reviews (1 review per user per book)
-  Search books by title or author (case-insensitive & partial match)



## 🛠 Tech Stack

- **Node.js + Express.js**
- **MongoDB Atlas** with **Mongoose**
- **JWT (JSON Web Token)** for Authentication
- **Dotenv** for Environment Configuration



## Authentication Endpoints

 Method  Endpoint               Description              

 POST    `/api/auth/signup`     Register a new user      
 POST    `/api/auth/login`      Login and get JWT token  


##  Book Endpoints

 Method  Endpoint                    Description                                      

POST    `/api/books`                Add a book (Authenticated users only)            GET     `/api/books`                Get all books (with optional filters & pagination)  GET     `/api/books/:id`            Get a book by ID with average rating & reviews   POST    `/api/books/:id/reviews`    Submit a review for a book (1 review per user)  



##  Review Endpoints

 Method  Endpoint              Description            

 PUT     `/api/reviews/:id`    Update your own review 
 DELETE  `/api/reviews/:id`    Delete your own review 



##  Search Endpoint

http
GET /api/search?query=harry
