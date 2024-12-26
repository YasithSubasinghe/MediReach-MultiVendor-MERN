MediReach - Multivendor Ayurveda Medicine Selling Website with Super User and Chatbot
MediReach is a comprehensive web application built using the MERN stack (MongoDB, Express, React, Node.js). It provides an online platform for selling Ayurveda medicines and features a chatbot for enhanced user interaction. The system includes multivendor capabilities and a super user for administrative control, ensuring scalability and efficiency.

Features
User authentication and profile management.
Multivendor support for managing multiple sellers.
Super user for administrative control.
Ayurveda medicine catalog with detailed descriptions.
Cart and checkout functionality.
Integrated chatbot for assistance.
Payment gateway integration using Stripe.
Cloudinary support for image management.
Project Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)
MongoDB
A code editor like Visual Studio Code
npm or yarn (for managing dependencies)
Step 1: Clone the Repository
Clone the MediReach repository from GitHub:

cd MediReach

Step 2: Configure Environment Variables
Create a .env file at the path backend/config/.env and add the following variables:

PORT = <Your desired port number>
DB_URL = "<Your MongoDB connection string>"
JWT_SECRET_KEY = "<Your JWT secret key>"
JWT_EXPIRES = 7d
ACTIVATION_SECRET = "<Your activation secret>"
SMPT_SERVICE = gmail
SMPT_HOST = smtp.gmail.com
SMPT_PORT = 465
SMPT_PASSWORD = "<Your SMTP email password>"
SMPT_MAIL = "<Your SMTP email address>"
STRIPE_API_KEY = "<Your Stripe API key>"
STRIPE_SECRET_KEY = "<Your Stripe secret key>"
CLOUDINARY_NAME = "<Your Cloudinary cloud name>"
CLOUDINARY_API_KEY = "<Your Cloudinary API key>"
CLOUDINARY_API_SECRET = "<Your Cloudinary API secret>"
Fill in the placeholders with your credentials.

Step 3: Install Dependencies and Run the Application
1. Start the Socket Server
Navigate to the socket directory, install dependencies, and start the server:

cd socket
npm i
npm start
2. Start the Backend Server
Navigate to the backend directory, install dependencies, and start the server:

cd backend
npm i
npm start
3. Start the Frontend
Navigate to the frontend directory, install the necessary React version, and start the client:

cd frontend
npm install react@17.0.2 react-dom@17.0.2
npm start
Usage
Once all servers are running, open your browser and navigate to:

Frontend: http://localhost:<PORT> (Replace <PORT> with the port you specified in your .env file.)
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Happy coding!
