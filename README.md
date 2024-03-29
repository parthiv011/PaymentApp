# PaymentX

Virtual Payment App like paytm which allows a user to transfer a virtual amount to various users. This project is build with concept of transactions in databases. Built with MERN stack.

## Here's a more granular breakdown of your finance application, including requests, pages, models, and other details:

### 1. Requests (API Endpoints):

#### User Management:

1. /api/v1/user/register (POST): Creates a new user account.
2. /api/v1/user/login (POST): Authenticates a user and returns a token for secure access.
3. /api/v1/user/ (GET): Retrieves the currently logged-in user's profile information.
4. /api/v1/user/ (PUT): Updates the information of the current user Logged In.
5. /api/v1/user/bulk (GET): Retrives all the users that are currently associated with the application.

#### Transfer Routes:


Here the user authentication middleware is used to ensure only authenticated requests can access these routes.

1. api/v1/transfer (POST) : Transfers money from one user to another.
2. api/v1/balance (GET): Returns the account balance to the authenticated user.

### Technologies 

1. Javascript
2. Nodejs
3. Reactjs
4. MongoDB
5. zod
6. Transcations in Databases
7. ExpressJS framework
8. JWT Authentication
9. Tailwind CSS

# For Contributing 
- See [`contributing.md`](contributing.md) for more information and setting up.