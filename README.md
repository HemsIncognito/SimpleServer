# Simple Server | Backend Fundamentals | FSWD-3

## Topics Covered
- **Simple Server**: This repository demonstrates a basic Node.js server that implements CRD operations (Create, Read, Delete) for a simple to-do list.
- **HTTP Methods:** The server leverages GET, POST, and DELETE methods for interacting with the to-do list.
- **Express.js Server**: The code is demonstrates a basic Node.js server built with Express.js framework that implements CRUD operations (Create, Read, Delete) for a simple to-do list without error handling.

## Skills Highlighted
- **Understanding of HTTP Methods:** The code demonstrates the ability to utilize GET, POST, and DELETE methods for CRUD operations (excluding update).
- **Backend Fundamentals:** The code showcases basic Node.js functionalities and usage of express.js framework for building a server application.
- **Used ThunderClient** 

### NOTE:
- *No Error Handling*.
- *No Update Method.*

## API Endpoints    
Using *Thunder Client*, a popular VS Code extension, this simplifies interacting with API.
- **GET /todos:** Retrieves the current list of to-do items.
- **POST /todos:** Creates a new to-do item by sending the item data in JSON format within the request body. 
- **DELETE /todos:** Deletes a specific to-do item by sending the item data in JSON format within the request body.