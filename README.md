Here's a combined `README.md` file for both projects (backend and frontend):

---

# Project Name: Roxiler MERN STACK Task

## Backend

### Overview

This is a Node.js-based backend using Express, Mongoose, and CORS. It is configured to handle HTTP requests, connect to a MongoDB database, and make API calls using Axios.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

- **Start the server**:
  ```bash
  npm start
  ```
  This will start the backend server.
- **Testing**:
  ```bash
  npm test
  ```
  (Note: No tests have been specified yet.)

### Dependencies

- **axios**: For making HTTP requests.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **express**: Web framework for Node.js.
- **mongoose**: ODM for MongoDB.

### License

This project is licensed under ISC.

---

## Learning (Frontend)

### Overview

This is a React application built using Vite. It includes state management with Redux Toolkit, charts with `react-chartjs-2`, and uses TailwindCSS for styling.

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd learning
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

- **Development**:

  ```bash
  npm run dev
  ```

  Starts the Vite development server.

- **Build**:

  ```bash
  npm run build
  ```

  Builds the project for production.

- **Lint**:

  ```bash
  npm run lint
  ```

  Runs ESLint to check code quality.

- **Preview**:
  ```bash
  npm run preview
  ```
  Previews the production build.

### Dependencies

- **@reduxjs/toolkit**: For state management.
- **axios**: For making HTTP requests.
- **chart.js & react-chartjs-2**: For displaying charts.
- **react & react-dom**: Core React libraries.
- **react-redux**: Binding between React and Redux.

### DevDependencies

- **@vitejs/plugin-react**: Plugin to enable React support in Vite.
- **eslint**: For linting and enforcing code quality.
- **tailwindcss**: Utility-first CSS framework.

### License

This project is private.

---

### Author

Feel free to add your name and additional details.
