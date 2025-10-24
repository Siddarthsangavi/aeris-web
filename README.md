# Aeris Web Installation Guide

Follow these steps to install, configure, and run the **Aeris Web** application for local development or production deployment.

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org) (version 16 or higher)
- [npm](https://www.npmjs.com/)
- Access to the **Aeris API** backend (must be running locally or on a deployed server)

## Installation Steps

1. **Clone the Repository**
   ```
   git clone https://github.com/<your-username>/aeris-web.git
   cd aeris-web
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Create Environment Variables**
   In the project root directory, create a `.env` file and add the following:
   ```
   VITE_API_URL=http://localhost:3000
   ```
   *Note:* The `VITE_API_URL` should point to your Aeris backend API. Replace the URL if your backend runs on a different host or port.

4. **Run in Development Mode**
   ```
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

5. **Build for Production**
   ```
   npm run build
   ```
   The production build will be generated in the `dist` folder.

6. **Preview the Production Build**
   ```
   npm run preview
   ```
   This command serves the built app locally for testing.
```