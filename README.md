# Real-Time Chat App

A full-stack messaging application built with React, Node.js, Express, and MongoDB. Users can create an account, exchange text and image messages, view online status, and personalize their experience with selectable themes.

Socket.IO delivers incoming messages in real time, while MongoDB stores conversations for later access.

## Features

- **Real-time messaging:** Send and receive direct messages without refreshing the page.
- **Image sharing:** Upload and share images in conversations through Cloudinary.
- **User authentication:** Sign-up and login flows with protected application routes.
- **Conversation history:** Store and retrieve messages using MongoDB.
- **Online status:** See which users are currently connected.
- **User profiles:** Access a dedicated profile page.
- **Custom themes:** Personalize the interface through the settings page.
- **Toast notifications:** Receive feedback on application actions.

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React, Vite, JavaScript |
| Styling | Tailwind CSS, DaisyUI |
| State Management | Zustand |
| Routing | React Router |
| HTTP Client | Axios |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Real-Time Communication | Socket.IO |
| Authentication Libraries | JSON Web Token, bcryptjs |
| Image Hosting | Cloudinary |
| UI Utilities | Lucide React, React Hot Toast |

## How It Works

1. Users sign up or log in to access the chat interface.
2. The application loads available users and existing conversation history.
3. Outgoing messages are saved to MongoDB.
4. Socket.IO delivers new messages to connected recipients.
5. Images are uploaded to Cloudinary, and their URLs are stored with the messages.
6. Users can access their profile and change the interface theme through dedicated pages.

## Project Structure

    chat-app/
    ├── Backend/
    │   ├── src/
    │   │   ├── controllers/
    │   │   ├── lib/
    │   │   ├── middleware/
    │   │   ├── models/
    │   │   ├── routes/
    │   │   ├── seeds/
    │   │   └── index.js
    │   ├── .env.template
    │   └── package.json
    ├── Frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── Store/
    │   │   ├── assets/
    │   │   ├── compoenents/
    │   │   ├── constants/
    │   │   ├── lib/
    │   │   ├── pages/
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   └── package.json
    └── package.json

## Environment Configuration

The backend includes an `.env.template` file with the following variables:

| Variable | Purpose |
|----------|---------|
| `MONGODB_URI` | MongoDB connection string |
| `PORT` | Backend server port |
| `JWT_SECRET` | Secret used to sign authentication tokens |
| `NODE_ENV` | Application environment |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

Copy the template to `Backend/.env` and provide your own configuration values. Keep credentials out of version control.
