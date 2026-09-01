# KUITC CMS - Master Architecture Document

**Project**: Content Management System (CMS) for Blog & Landing Page Management
**Stack**: FastAPI (Backend) | Node.js (Frontend) | PostgreSQL (Database)
**Platform**: Web Application (Linux developed, multi-browser compatible)

---

## 📋 Project Overview

A full-stack CMS application allowing:

- **Admin Users**: Create, read, update, delete (CRUD) blog posts with images and text
- **Public Users**: View published blog posts and landing page content
- **Landing Page**: Customizable content managed via admin panel
- **Navigation**: Dynamic navigation panel (team, contact, blog, services, etc.)

---

## 🏗️ DEVELOPMENT PHASES & STEP-BY-STEP ROADMAP

### **Phase 1: Project Setup & Infrastructure**

1. Initialize PostgreSQL database schema (users, blogs, pages, navigation)
2. Set up FastAPI backend project structure
3. Set up Node.js (React/Vue) frontend project structure
4. Configure environment files (.env) for both backends
5. Set up Docker (optional) for local development

### **Phase 2: Backend Core (FastAPI)**

1. Create user authentication system (JWT tokens, admin roles)
2. Build database models (User, Blog, Page, NavigationItem)
3. Create API endpoints for blog CRUD operations
4. Create API endpoints for landing page content management
5. Create API endpoints for navigation management
6. Implement role-based access control (RBAC) - admin vs public
7. Set up file upload handling for blog images
8. Implement image storage (local or cloud - S3)
9. Add input validation and error handling
10. Create database migrations using Alembic

### **Phase 3: Frontend Core (Node.js)**

1. Set up frontend project (React with TypeScript or Vue)
2. Create authentication UI (login/register for admins)
3. Build admin dashboard layout
4. Create admin blog management pages (list, create, edit, delete)
5. Create admin landing page editor
6. Create admin navigation manager
7. Build public landing page (renders managed content)
8. Build public blog listing page
9. Build public blog detail/single post page
10. Create navigation bar component (renders managed navigation)
11. Set up API client/service layer for backend communication
12. Implement state management (Redux, Zustand, Pinia)

### **Phase 4: Integration & Testing**

1. Connect frontend to backend APIs
2. Test authentication flow end-to-end
3. Test blog CRUD operations
4. Test file uploads (images)
5. Test role-based access (admin vs public views)
6. Test landing page content management
7. Test responsive design (mobile, tablet, desktop)
8. Fix cross-browser compatibility issues

### **Phase 5: Refinement & Deployment**

1. Add image optimization and caching
2. Implement pagination for blog lists
3. Add search functionality for blogs
4. Add commenting system (optional)
5. Set up logging and monitoring
6. Create deployment pipeline (Docker, CI/CD)
7. Deploy to production
8. Create user documentation

---

## 📁 BACKEND FOLDER STRUCTURE (FastAPI)

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                 # Entry point, app initialization
│   ├── config.py               # Configuration, environment variables
│   ├── dependencies.py         # Shared dependencies (DB session, auth)
│   │
│   ├── db/
│   │   ├── __init__.py
│   │   ├── base.py             # SQLAlchemy Base model
│   │   ├── engine.py           # Database connection setup
│   │   └── session.py          # Session factory
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py             # User model
│   │   ├── blog.py             # Blog post model
│   │   ├── page.py             # Landing page content model
│   │   └── navigation.py       # Navigation item model
│   │
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── user.py             # User Pydantic schemas (request/response)
│   │   ├── blog.py             # Blog Pydantic schemas
│   │   ├── page.py             # Page Pydantic schemas
│   │   └── navigation.py       # Navigation Pydantic schemas
│   │
│   ├── api/
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── router.py       # Main router combining all endpoints
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── auth.py     # Login, register, token refresh
│   │   │   │   ├── blogs.py    # Blog CRUD endpoints
│   │   │   │   ├── pages.py    # Landing page endpoints
│   │   │   │   ├── navigation.py # Navigation endpoints
│   │   │   │   └── health.py   # Health check endpoint
│   │
│   ├── crud/
│   │   ├── __init__.py
│   │   ├── base.py             # Base CRUD operations (generic)
│   │   ├── user.py             # User CRUD operations
│   │   ├── blog.py             # Blog CRUD operations
│   │   ├── page.py             # Page CRUD operations
│   │   └── navigation.py       # Navigation CRUD operations
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   ├── auth_service.py     # Authentication logic (JWT, hashing)
│   │   ├── file_service.py     # File upload, storage handling
│   │   └── email_service.py    # Email notifications (optional)
│   │
│   ├── security/
│   │   ├── __init__.py
│   │   ├── jwt.py              # JWT token creation/validation
│   │   ├── password.py         # Password hashing/verification
│   │   └── permissions.py      # Role-based access control
│   │
│   ├── middleware/
│   │   ├── __init__.py
│   │   └── cors.py             # CORS configuration
│   │
│   └── utils/
│       ├── __init__.py
│       ├── logger.py           # Logging setup
│       └── helpers.py          # Utility functions
│
├── alembic/
│   ├── versions/               # Database migrations
│   ├── env.py
│   ├── script.py.mako
│   └── alembic.ini
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py             # Pytest configuration
│   ├── test_auth.py
│   ├── test_blogs.py
│   ├── test_pages.py
│   └── test_navigation.py
│
├── .env.example                # Environment variables template
├── requirements.txt            # Python dependencies
├── pyproject.toml              # Project metadata (optional, modern Python)
├── Dockerfile                  # Docker configuration
└── README.md                   # Backend documentation
```

---

## 📁 FRONTEND FOLDER STRUCTURE (Node.js - React Example)

```
frontend/
├── public/
│   ├── index.html              # Main HTML file
│   ├── favicon.ico
│   └── assets/                 # Static assets
│
├── src/
│   ├── index.tsx               # Entry point
│   ├── App.tsx                 # Root component
│   ├── App.css
│   │
│   ├── pages/
│   │   ├── Landing.tsx         # Public landing page
│   │   ├── BlogList.tsx        # Public blog listing
│   │   ├── BlogDetail.tsx      # Public single blog post
│   │   ├── NotFound.tsx        # 404 page
│   │   │
│   │   ├── admin/
│   │   │   ├── AdminDashboard.tsx        # Admin main dashboard
│   │   │   ├── BlogManagement.tsx        # Blog CRUD interface
│   │   │   │   ├── BlogList.tsx          # List all blogs
│   │   │   │   ├── BlogCreate.tsx        # Create new blog
│   │   │   │   └── BlogEdit.tsx          # Edit blog
│   │   │   ├── PageEditor.tsx            # Landing page editor
│   │   │   ├── NavigationManager.tsx     # Navigation editor
│   │   │   └── UserManagement.tsx        # Manage admin users (optional)
│   │   │
│   │   └── auth/
│   │       ├── Login.tsx                 # Admin login page
│   │       ├── Register.tsx              # Admin registration (controlled)
│   │       └── ProtectedRoute.tsx        # Route guard for admin pages
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx               # Navigation bar (renders managed nav)
│   │   │   ├── Footer.tsx               # Footer
│   │   │   ├── Sidebar.tsx              # Admin sidebar
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Spinner.tsx              # Loading indicator
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx             # Blog post card component
│   │   │   ├── BlogForm.tsx             # Form for create/edit blog
│   │   │   └── ImageUploader.tsx        # Image upload component
│   │   │
│   │   └── page/
│   │       ├── PageSection.tsx          # Editable page section
│   │       └── PageBuilder.tsx          # Visual page editor
│   │
│   ├── services/
│   │   ├── api.ts              # Axios/Fetch instance configuration
│   │   ├── authService.ts      # Auth API calls
│   │   ├── blogService.ts      # Blog API calls
│   │   ├── pageService.ts      # Page API calls
│   │   └── navigationService.ts # Navigation API calls
│   │
│   ├── hooks/
│   │   ├── useAuth.ts          # Authentication hook
│   │   ├── useBlog.ts          # Blog data hook
│   │   └── useFetch.ts         # Generic data fetching hook
│   │
│   ├── context/ (or redux/pinia)
│   │   ├── AuthContext.tsx     # Authentication state
│   │   ├── BlogContext.tsx     # Blog state
│   │   └── UIContext.tsx       # UI state (modals, notifications)
│   │
│   ├── types/
│   │   ├── index.ts            # Shared TypeScript interfaces
│   │   ├── auth.ts
│   │   ├── blog.ts
│   │   ├── page.ts
│   │   └── navigation.ts
│   │
│   ├── utils/
│   │   ├── constants.ts        # App constants, API endpoints
│   │   ├── validators.ts       # Form validation functions
│   │   ├── formatters.ts       # Date, text formatting
│   │   └── helpers.ts          # Utility functions
│   │
│   ├── styles/
│   │   ├── globals.css         # Global styles
│   │   ├── variables.css       # CSS variables
│   │   └── responsive.css      # Responsive breakpoints
│   │
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── fonts/
│
├── .env.example                # Environment variables template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── webpack.config.js (if not using CRA)
├── Dockerfile                  # Docker configuration
├── .gitignore
└── README.md                   # Frontend documentation
```

---

## 🗄️ DATABASE SCHEMA (PostgreSQL)

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt VARCHAR(500),
  featured_image_url VARCHAR(500),
  author_id INTEGER NOT NULL REFERENCES users(id),
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP
);

-- Landing page sections
CREATE TABLE pages (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  section_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Navigation items
CREATE TABLE navigation_items (
  id SERIAL PRIMARY KEY,
  label VARCHAR(100) NOT NULL,
  url VARCHAR(255) NOT NULL,
  icon_url VARCHAR(255),
  display_order INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔌 API ENDPOINTS OVERVIEW

### Authentication Endpoints

- `POST /api/v1/auth/login` - Admin login
- `POST /api/v1/auth/register` - Admin registration (controlled)
- `POST /api/v1/auth/refresh` - Refresh JWT token
- `POST /api/v1/auth/logout` - Logout

### Blog Endpoints

- `GET /api/v1/blogs` - Get all published blogs (public)
- `GET /api/v1/blogs/{id}` - Get single blog (public)
- `POST /api/v1/blogs` - Create blog (admin only)
- `PUT /api/v1/blogs/{id}` - Update blog (admin only)
- `DELETE /api/v1/blogs/{id}` - Delete blog (admin only)

### Page Endpoints

- `GET /api/v1/pages` - Get landing page content (public)
- `GET /api/v1/pages/{slug}` - Get specific page section
- `PUT /api/v1/pages/{id}` - Update page content (admin only)

### Navigation Endpoints

- `GET /api/v1/navigation` - Get navigation items (public)
- `POST /api/v1/navigation` - Add navigation item (admin only)
- `PUT /api/v1/navigation/{id}` - Update navigation (admin only)
- `DELETE /api/v1/navigation/{id}` - Delete navigation (admin only)

### File Upload Endpoints

- `POST /api/v1/upload` - Upload image (admin only)
- `GET /api/v1/uploads/{filename}` - Get uploaded file

---

## 🔐 Authentication & Authorization Flow

```
1. Admin Login
   ├─ POST /auth/login (email, password)
   ├─ Backend validates credentials
   ├─ JWT token generated (access + refresh)
   └─ Frontend stores token in localStorage/sessionStorage

2. Authenticated Requests
   ├─ Frontend includes JWT in Authorization header
   ├─ Backend validates token
   └─ Request proceeds if valid

3. Role-Based Access
   ├─ Admin endpoints check is_admin flag
   └─ Public endpoints skip authentication
```

---

## 🚀 Technology Stack Details

### Backend (FastAPI)

- **Framework**: FastAPI 0.100+
- **ORM**: SQLAlchemy
- **Database**: PostgreSQL with psycopg2
- **Authentication**: JWT (PyJWT)
- **Password Hashing**: bcrypt
- **File Upload**: python-multipart
- **Validation**: Pydantic
- **Migration**: Alembic
- **Testing**: pytest, httpx

### Frontend (Node.js)

- **Framework**: React 18 (or Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS / Material-UI
- **HTTP Client**: axios
- **State Management**: Redux Toolkit / Zustand
- **Form Handling**: React Hook Form
- **Routing**: React Router v6
- **Build Tool**: Vite (recommended) or Create React App

### Database

- **PostgreSQL 13+**
- **Connection Pooling**: PgBouncer or SQLAlchemy pooling
- **Backups**: Automated backups strategy

---

## 📝 DEVELOPMENT WORKFLOW

1. **Setup Phase** (Day 1)
   - Initialize both backend and frontend
   - Setup database locally
   - Configure .env files

2. **Backend Development** (Days 2-4)
   - Database models and migrations
   - API endpoints implementation
   - Authentication & authorization
   - Testing

3. **Frontend Development** (Days 5-7)
   - UI components creation
   - Admin dashboard
   - Public pages
   - API integration

4. **Integration & Testing** (Day 8)
   - End-to-end testing
   - Bug fixes
   - Performance optimization

5. **Deployment** (Day 9+)
   - Containerization (Docker)
   - CI/CD pipeline
   - Production deployment

---

## 🔧 Environment Variables

### Backend (.env)

```
DATABASE_URL=postgresql://user:password@localhost/kuitc_db
SECRET_KEY=your-super-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
UPLOAD_FOLDER=./uploads
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
DEBUG=True
```

### Frontend (.env)

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_APP_NAME=KUITC CMS
```

---

## 📚 References & Best Practices

1. **Security**
   - Never commit .env files
   - Use HTTPS in production
   - Implement CSRF protection
   - Sanitize user inputs
   - Rate limiting on API endpoints

2. **Performance**
   - Implement pagination for blog lists
   - Cache responses (Redis optional)
   - Optimize images before storage
   - Lazy load frontend components

3. **Code Quality**
   - Follow PEP 8 for Python
   - Follow Prettier/ESLint for JavaScript
   - Write tests for critical functions
   - Use type hints (Python) and TypeScript

4. **Documentation**
   - Keep API documentation updated
   - Document environment setup
   - Add comments for complex logic
   - Create user guides for admin panel

---

**Status**: This document serves as the master reference for the KUITC CMS project.
**Last Updated**: 2026-08-31
