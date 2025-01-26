Creating Project BLOG-POST ALX Fullstack (BACKEND -> Django - FRONTEND -> Reactjs)

# Blog Post Application

A full-stack blog application enabling users to create, read, update, and delete blog posts. The backend is powered by Django REST Framework, and the frontend is built with React.js.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with JWT
- Create, read, update, and delete blog posts
- Responsive design for various devices

## Tech Stack

- **Backend:** Django REST Framework
- **Frontend:** React.js, Redux Toolkit, React Router DOM
- **Authentication:** JWT
- **Styling:** Tailwind CSS

## Installation

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn

### Backend Setup

1. **Clone the repository:**

   git clone https://github.com/Devjabli/blog-post.git
   cd blog-post/backend

2. **Create a virtual environment and activate it:**

   python3 -m venv venv
   source venv/bin/activate

3. **Install backend dependencies:**

   pip install -r requirements.txt

4. **Apply migrations:**

   python manage.py migrate 

5. **Create a superuser:**

   python manage.py createsuperuser

6. **Start the backend server:**

   python manage.py runserver


   The backend server will run at `http://127.0.0.1:8000/`.

### Frontend Setup

1. **Navigate to the frontend directory:**

   cd ../frontend
   
2. **Install frontend dependencies:**


   npm install


3. **Start the frontend development server:**


   npm start


   The frontend server will run at `http://localhost:3000/`.

## Usage

1. **Access the application:**

   Open your browser and navigate to `http://localhost:3000/`.

2. **Register and log in:**

   Create a new account or log in with your credentials.

3. **Manage blog posts:**

   - Create new posts
   - Edit existing posts
   - Delete posts
   - View all posts

## Project Structure

```bash
blog-post/
├── backend/
│   ├── api/
|   |   user/
│   ├── backend/
│   ├── media/
│   ├── manage.py
│   ├── requirements.txt
│   └── ...
└── frontend/
    ├── public/
    ├── src/
    ├── package.json
    └── ...
```

- **backend/**: Contains the Django project and applications.
- **frontend/**: Contains the React application.
