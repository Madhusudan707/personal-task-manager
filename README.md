# Personal Task Manager

A simple Personal Task Manager web application built with React.js, Next.js, TypeScript, Firebase, and Tailwind CSS. This application allows you to log in using your Gmail account and provides CRUD (Create, Read, Update, Delete) functionality for managing your tasks.

## Table of Contents

- [Personal Task Manager](#personal-task-manager)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Demo

[Live Demo](https://personal-task-manager-eight.vercel.app/)

## Features

- **Gmail Login:** Authenticate and log in using your Gmail account.
- **Task Management:**
  - Create, read, update, and delete tasks.
  - Organize tasks with categories or labels.
  - Mark tasks as completed.
- **User Authentication:** Secure user authentication powered by Firebase Authentication.
- **Realtime Database:** Store and sync task data in a Firebase Realtime Database.
- **Responsive Design:** User-friendly and responsive UI, designed with Tailwind CSS.
- **Deployment:** Deploy your application easily on Vercel.

## Tech Stack

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/personal-task-manager.git
   cd personal-task-manager
    ```

2. **Install Dependencies::**
    
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Firebase Configuration::**
    + Create a Firebase project on the Firebase Console.
    + Set up Firebase Authentication for Gmail login.
    + Create a Firebase Realtime Database to store task data.
    + Copy your Firebase project's configuration and replace it in your project's Firebase config file (usually found in firebase.ts or similar).

4. **Firebase Credentials::**
   Create a .env file add the below config
    NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_MESSAGING_APP_ID
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MESSAGING_MEASUREMENT_ID

4. **Run the Application::**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
## Deployment
You can deploy this project to Vercel or any other hosting service of your choice. Here are the general steps for deploying to Vercel:

1. Sign up for a Vercel account if you don't have one.

2. Install the Vercel CLI if you haven't already

    ```bash 
        npm install -g vercel
        # or
        yarn global add vercel
    ```
3. Run the following command in your project directory:
   
    ```bash 
        vercel
    ```
4. Follow the prompts to deploy your application. Vercel will provide you with a deployment URL.
5. Access your deployed application at the provided URL.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

+ Fork the repository.
+ Create a new branch for your feature or bug fix.
+ Make your changes and ensure tests (if any) pass.
+ Commit your changes with descriptive commit messages.
+ Push your branch to your fork.
+ Create a pull request to the main branch of the original repository.

## License
This project is licensed under the MIT License.