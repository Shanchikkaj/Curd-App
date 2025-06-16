# Simple REST API - Node.js + Express + MongoDB

## 📌 Features
- ✅ User registration & login (no authentication logic)
- ✅ CRUD operations for Product (name, price, quantity)

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
---

## 🚀 How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/YOUR_USERNAME/rest-api-nodejs-mongo.git
    cd rest-api-nodejs-mongo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```
3. Create a .env file:
    ```bash
    MONGO_URI=mongodb://127.0.0.1:27017/my_rest_api
    PORT=5000
    ```
4. Run the server:
    ```bash
    node server.js 
    ```
---
**📮 API Endpoints**
**👤 Users**
| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| POST   | `/api/users/register` | Register a user |
| POST   | `/api/users/login`    | Login a user    |
---
**📦 Products**
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/products`     | Create new product |
| GET    | `/api/products`     | Get all products   |
| GET    | `/api/products/:id` | Get one product    |
| PUT    | `/api/products/:id` | Update product     |
| DELETE | `/api/products/:id` | Delete product     |
---
**✅ Author**
:Shanchikkaj
---


