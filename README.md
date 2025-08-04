# Role-Based College Portal

A comprehensive Node.js-based college management system with role-based access control for students, faculty, and administrators.

## 🚀 Features

### Authentication & Authorization

- **Multi-role System**: Support for Students, Faculty, and Administrators
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Role-based Access Control**: Different permissions and features for each user role

### Course Management

- **Course Creation**: Faculty can create and manage courses
- **Course Assignment**: Link faculty members to specific courses
- **Course Materials**: Upload and manage course materials and resources

### Result Management

- **Grade Management**: Faculty can publish student results
- **Result Tracking**: Students can view their academic performance
- **Secure Result Access**: Role-based result viewing permissions

### Announcement System

- **Campus-wide Announcements**: Administrators can post important notices
- **Real-time Updates**: Centralized communication system
- **Audit Trail**: Track who created announcements and when

### User Management

- **User Registration**: Secure user account creation
- **Profile Management**: User profile updates and management
- **Role Assignment**: Flexible role assignment system

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **Development**: nodemon for hot reloading

## 📁 Project Structure

```
role-based-college-portal/
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   │   ├── adminController.js
│   │   ├── announcementController.js
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   └── resultController.js
│   ├── middlewares/      # Custom middleware
│   ├── models/          # Database models
│   │   ├── Announcement.js
│   │   ├── APIKey.js
│   │   ├── Course.js
│   │   ├── Material.js
│   │   ├── Result.js
│   │   └── User.js
│   ├── routes/          # API routes
│   │   ├── adminRoutes.js
│   │   ├── announcementRoutes.js
│   │   ├── authRoutes.js
│   │   ├── courseRoutes.js
│   │   └── resultRoutes.js
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── package.json
└── README.md
```

## 🗄️ Database Models

### User Model

- **Fields**: name, email, password, role, createdAt
- **Roles**: student, faculty, admin
- **Features**: Password hashing, email validation

### Course Model

- **Fields**: name, code, faculty, createdAt
- **Features**: Unique course codes, faculty assignment

### Result Model

- **Fields**: student, subject, marks, publishedBy, createdAt
- **Features**: Grade tracking, publisher tracking

### Announcement Model

- **Fields**: title, content, createdBy, createdAt
- **Features**: Campus communication, audit trail

### Material Model

- **Fields**: course, title, fileUrl, uploadedBy, createdAt
- **Features**: Course resource management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd role-based-college-portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/college-portal
   JWT_SECRET=your-secret-key-here
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   For development with auto-reload:

   ```bash
   npm run dev
   ```

## 📋 API Endpoints

### Authentication Routes

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Admin Routes

- `GET /api/admin/users` - Get all users
- `POST /api/admin/users` - Create new user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

### Course Routes

- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course
- `GET /api/courses/:id` - Get specific course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Result Routes

- `GET /api/results` - Get results (role-based)
- `POST /api/results` - Create new result
- `GET /api/results/:id` - Get specific result
- `PUT /api/results/:id` - Update result

### Announcement Routes

- `GET /api/announcements` - Get all announcements
- `POST /api/announcements` - Create announcement
- `GET /api/announcements/:id` - Get specific announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Request validation using express-validator
- **Role-based Access**: API endpoints protected by role middleware
- **MongoDB Security**: Proper database connection with error handling

## 👥 User Roles & Permissions

### Student

- View their own results
- Access course materials
- View announcements
- Update profile

### Faculty

- Create and manage courses
- Upload course materials
- Publish student results
- View announcements
- Manage assigned courses

### Administrator

- Full system access
- User management
- Course oversight
- Announcement management
- System-wide administration

## 🧪 Testing

```bash
npm test
```

## 📝 Environment Variables

| Variable     | Description               | Default |
| ------------ | ------------------------- | ------- |
| `PORT`       | Server port               | 5000    |
| `MONGO_URI`  | MongoDB connection string | -       |
| `JWT_SECRET` | JWT signing secret        | -       |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Note**: This is a backend API project. You'll need to create a frontend application to consume these APIs and provide a user interface for the college portal.
