
# E-commerce Website Backend

This project is the backend development for a simple e-commerce website built using **Node.js**, **Express**, and **MongoDB**. The backend handles user authentication, product management, shopping cart functionality, and order management.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation and Setup](#installation-and-setup)
4. [API Endpoints](#api-endpoints)
   - [Authentication](#authentication)
   - [Product Management](#product-management)
   - [Cart and Order Management](#cart-and-order-management)
5. [Testing API with Postman](#testing-api-with-postman)
6. [Error Handling](#error-handling)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **User Authentication:** Register, login, and protect routes using JWT.
- **Product Management:** Admins can add, edit, and delete products.
- **Cart and Order Management:** Users can add products to their cart and place orders.
- **Payment Integration:** Stripe integration for handling payments.
- **MongoDB:** Handles data persistence for users, products, and orders.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **JWT (JSON Web Tokens)**: For authentication and session management.
- **Stripe**: Payment gateway integration.
- **BcryptJS**: For password hashing.
- **Postman**: For API testing.

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v14+)
- MongoDB (local or Atlas)
- Postman (for testing)

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Lagat100/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. **Install Dependencies**
   Run the following command to install all required Node.js packages:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file at the root of the project and add the following variables:
   ```bash
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   ```

4. **Run the Application**
   Start the application using Nodemon for auto-restarts on code changes:
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000` and connect to your MongoDB instance.

5. **Test in Postman**
   Use Postman to test the API endpoints.

## API Endpoints

### Authentication

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| POST   | `/api/register`        | Register a new user                |
| POST   | `/api/login`           | Login with email and password      |
| GET    | `/api/user/profile`    | Get user profile (JWT protected)   |

#### Register a New User
```bash
POST /api/register
Content-Type: application/json
{
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "password": "password"
}
```

#### Login User
```bash
POST /api/login
Content-Type: application/json
{
  "email": "johndoe@gmail.com",
  "password": "password"
}
```

#### Get User Profile
```bash
GET /api/user/profile
Headers: Authorization: Bearer <token>
```

### Product Management (Admin)

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| POST   | `/api/products`        | Create a new product (Admin only)  |
| GET    | `/api/products`        | Get all products                   |
| GET    | `/api/products/:id`    | Get a product by ID                |
| PUT    | `/api/products/:id`    | Update a product (Admin only)      |
| DELETE | `/api/products/:id`    | Delete a product (Admin only)      |

### Cart and Order Management

| Method | Endpoint                | Description                           |
|--------|-------------------------|---------------------------------------|
| POST   | `/api/cart`              | Add a product to cart                 |
| GET    | `/api/cart`              | Get user cart                         |
| POST   | `/api/orders`            | Place an order (payment required)     |
| GET    | `/api/orders`            | Get user orders                       |

## Testing API with Postman

To test the backend APIs, follow these steps in **Postman**:

1. **Authentication (Register/Login):**
   - Register a new user by sending a `POST` request to `/api/register`.
   - Login to retrieve the JWT token using `/api/login`.

2. **Authorization:**
   - For protected routes, such as viewing the user profile or adding a product, pass the JWT token in the request header as:
     ```bash
     Authorization: Bearer <your_jwt_token>
     ```

3. **Product Management:**
   - As an admin, add products by sending a `POST` request to `/api/products` with the necessary data.
   - Make sure to pass the JWT token of an admin user in the headers.

4. **Cart and Orders:**
   - Add items to the cart using the `/api/cart` endpoint.
   - Place an order by sending a `POST` request to `/api/orders`.

### Example: Adding a Product as Admin
```bash
POST /api/products
Headers: Authorization: Bearer <admin_token>
Content-Type: application/json
{
  "name": "Laptop",
  "description": "A high-end gaming laptop",
  "price": 1500,
  "category": "Electronics"
}
```

### Example: Placing an Order
```bash
POST /api/orders
Headers: Authorization: Bearer <user_token>
Content-Type: application/json
{
  "cartItems": [
    {
      "productId": "61e9450a0c7f4c44bca472f9",
      "quantity": 1
    }
  ],
  "totalPrice": 1500,
  "shippingAddress": "123 Main Street",
  "paymentMethod": "Stripe"
}
```

## Error Handling

The API uses centralized error handling. Errors are returned in the following format:

```json
{
  "success": false,
  "message": "Error message"
}
```

- **401 Unauthorized**: Missing or invalid JWT token.
- **403 Forbidden**: Attempting to access an admin-only route.
- **404 Not Found**: Product or user not found.
- **500 Server Error**: Internal server errors.

## Contributing

Contributions are welcomed to improve the backend functionality of the e-commerce website. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License.
