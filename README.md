# React Demo

A simple React app using Vite, Axios, and TailwindCSS.

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/react-demo.git
cd react-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

- **For local development**, open `.env` and set the API URL:

    ```env
    VITE_API_BASE_URL=http://localhost:8080
    ```

- **For production**, open `.env.production` and set the production API URL:

    ```env
    VITE_API_BASE_URL=https://api.yourdomain.com
    ```

### 4. Run the App (Development Mode)

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### 5. Build for Production

```bash
npm run build
```

This will automatically use `.env.production` for the production environment variables.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/                # App source code
public/             # Public files
.env                # Local development environment variables
.env.production     # Production environment variables
```
