# Blog Application with React, Node.js, and MySQL

## Introduction

This project is a blog application built using React for the frontend, Node.js with Express for the backend, and MySQL for the database. It includes user authentication, post management, and more.

Here's a quick overview of the application's features:

-   **Home Page:** Fetches and displays all blog posts from the MySQL database.
-   **Single Post Page:** Displays a single blog post along with user information (author).  It demonstrates joining different tables in MySQL.
-   **User Authentication:** Allows users to log in and register.
-   **Authorization:**  Users can only edit or delete their own posts.
-   **Rich Text Editor:** Uses a rich text editor for creating and styling posts.
-   **Image Uploads:** Stores uploaded images on the server.
-   **Sidebar Recommendations:** Recommends similar posts based on category.
-   **New Post Creation:**  Allows authenticated users to create new blog posts.
-   **Logout Functionality:** Allows users to log out.
-   **Database Relationships:**  Illustrates database relationships using foreign keys.
-   **Security:** Implements security using JSON Web Tokens (JWT) and cookies.
-   **Advanced CSS:** Includes advanced CSS tips.

## Installation

1.  **Create Project Folders:**

    ```
    mkdir blog-app
    cd blog-app
    mkdir api client
    ```

2.  **Clone React App Template (Client):**

    ```
    cd client
    git clone -b react-mini https://github.com/sree-teja/Blog_Website .
    yarn install # Or npm install
    yarn start   # To start the client
    cd ..
    ```

3.  **Initialize Node.js App (API):**

    ```
    cd api
    npm init -y
    npm install express mysql nodemon bcrypt jsonwebtoken cookie-parser cors multer
    ```

4.  **Create MySQL Database:**

    *   Use MySQL Workbench or your preferred MySQL client.
    *   Create a new schema named `blog`.
    *   Create tables for `users` and `posts` (see schema details below).

## Database Schema

### Users Table

| Column     | Type         | Attributes                       |
|------------|--------------|----------------------------------|
| id         | INT          | PRIMARY KEY, AUTO_INCREMENT      |
| username   | VARCHAR(255) | NOT NULL                         |
| email      | VARCHAR(255) | NOT NULL                         |
| password   | VARCHAR(255) | NOT NULL                         |
| img        | VARCHAR(255) | NULLABLE                         |

### Posts Table

| Column          | Type          | Attributes                       |
|-----------------|---------------|----------------------------------|
| id              | INT           | PRIMARY KEY, AUTO_INCREMENT      |
| title           | VARCHAR(255)  | NOT NULL                         |
| description     | TEXT          | NOT NULL                         |
| img             | VARCHAR(255)  | NULLABLE                         |
| date            | DATETIME      | NULLABLE                         |
| uid             | INT           | FOREIGN KEY referencing users(id),  ON DELETE CASCADE |
| category        | VARCHAR(255)  | NULLABLE                         |


## Notes

*   **CSS Styling:**  The project uses SCSS for styling. All styles are consolidated into a single `style.scss` file for simplicity. 
*   **Image Handling:**  The backend includes a file upload mechanism using Multer.
*   **Validation:** Added input validation on both the client and server sides to prevent invalid data from being stored in the database.
*   **Security:**  The project uses JWTs for authentication. 


## Further Enhancements

*   **User Profile Management:** Implement features for users to update their profile information (e.g., username, email, profile picture).
*   **Category Management:**  Allow administrators to add, edit, and delete blog post categories.
*   **Comments Section:**  Add a commenting system to allow users to discuss blog posts.
*   **Search Functionality:** Implement a search feature to allow users to find blog posts based on keywords.
*   **Pagination:**  Implement pagination for the home page and category pages to improve performance and user experience for blogs with a large number of posts.
*   **Admin Panel:** Create an admin panel for managing users, posts, and categories.
*   **Testing:** Write unit and integration tests to ensure the stability and reliability of the application.
*   **Deployment:** Deploy the application to a production environment (e.g., Heroku, Netlify, AWS).
