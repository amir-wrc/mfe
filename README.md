# Angular Microfrontend Application

A complete Angular 16.2.0 microfrontend application using Module Federation with a shell app and two remote apps (Todo and Shopping Cart).

## 🏗️ Architecture

- **Shell App** (Port 4200): Main application with login and dashboard
- **Todo App** (Port 4201): Remote microfrontend for task management
- **Shopping Cart App** (Port 4202): Remote microfrontend for e-commerce

## 📋 Features

### Shell App
- ✅ Login page with authentication
- ✅ Dashboard with header cards for remote apps
- ✅ Dynamic left-side menu that changes based on selected app
- ✅ Module Federation configuration to load remote apps

### Todo App
- ✅ Task management with add, complete, and delete functionality
- ✅ Filter tasks by all, active, and completed
- ✅ Statistics dashboard showing total, active, and completed tasks
- ✅ Local storage persistence

### Shopping Cart App
- ✅ Product catalog with 6 sample products
- ✅ Add to cart functionality
- ✅ Shopping cart with quantity management
- ✅ Cart summary with tax calculation
- ✅ Checkout functionality
- ✅ Local storage persistence

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI 16.2.0

### Installation

1. **Install dependencies for all apps:**

```bash
# Shell App
cd shell-app
npm install

# Todo App
cd ../todo-app
npm install

# Shopping Cart App
cd ../shopping-cart-app
npm install
```

### Running the Applications

You need to run all three applications simultaneously in separate terminals:

**Terminal 1 - Shell App:**
```bash
cd shell-app
npm start
```
The shell app will run on http://localhost:4200

**Terminal 2 - Todo App:**
```bash
cd todo-app
npm start
```
The todo app will run on http://localhost:4201

**Terminal 3 - Shopping Cart App:**
```bash
cd shopping-cart-app
npm start
```
The shopping cart app will run on http://localhost:4202

### Alternative: Run All Apps with One Command

You can create a script to run all apps simultaneously. Create a `start-all.bat` file in the root directory:

```batch
@echo off
start cmd /k "cd shell-app && npm start"
start cmd /k "cd todo-app && npm start"
start cmd /k "cd shopping-cart-app && npm start"
```

Then run:
```bash
start-all.bat
```

## 📖 Usage Guide

### 1. Login
- Navigate to http://localhost:4200
- Enter any username and password (authentication is simulated)
- Click "Login" to access the dashboard

### 2. Dashboard
- After login, you'll see the dashboard with two cards:
  - **Todo App** (Green card)
  - **Shopping Cart** (Orange card)
- The left sidebar shows common menu items initially

### 3. Using Todo App
- Click on the "Todo App" card in the header
- The left menu will update to show Todo-specific options:
  - All Tasks
  - Active Tasks
  - Completed Tasks
- Add new tasks using the input field
- Check/uncheck tasks to mark them as complete
- Delete tasks using the trash icon
- View statistics at the top

### 4. Using Shopping Cart App
- Click on the "Shopping Cart" card in the header
- The left menu will update to show Shopping-specific options:
  - Products
  - Cart
  - Orders
- Browse products and click "Add to Cart"
- Navigate to Cart from the left menu
- Adjust quantities using +/- buttons
- Remove items or clear the entire cart
- Click "Checkout" to complete the purchase

## 🔧 Technical Details

### Module Federation Configuration

**Shell App (webpack.config.js):**
```javascript
remotes: {
  "todoApp": "http://localhost:4201/remoteEntry.js",
  "shoppingCartApp": "http://localhost:4202/remoteEntry.js"
}
```

**Todo App (webpack.config.js):**
```javascript
name: 'todoApp',
exposes: {
  './Module': './src/app/todo/todo.module.ts'
}
```

**Shopping Cart App (webpack.config.js):**
```javascript
name: 'shoppingCartApp',
exposes: {
  './Module': './src/app/shopping/shopping.module.ts'
}
```

### Routing Structure

**Shell App Routes:**
- `/login` - Login page
- `/dashboard` - Main dashboard
- `/dashboard/todo` - Lazy-loaded Todo app
- `/dashboard/shopping` - Lazy-loaded Shopping Cart app

**Todo App Routes:**
- `/` - All tasks
- `/all` - All tasks
- `/active` - Active tasks only
- `/completed` - Completed tasks only

**Shopping Cart App Routes:**
- `/` - Redirects to products
- `/products` - Product catalog
- `/cart` - Shopping cart
- `/orders` - Orders view

## 📦 Project Structure

```
NewMicroFrontend/
├── shell-app/
│   ├── src/
│   │   ├── app/
│   │   │   ├── dashboard/
│   │   │   ├── login/
│   │   │   ├── services/
│   │   │   └── app-routing.module.ts
│   │   └── decl.d.ts
│   └── webpack.config.js
├── todo-app/
│   ├── src/
│   │   └── app/
│   │       └── todo/
│   │           ├── todo-list/
│   │           ├── todo.module.ts
│   │           └── todo-routing.module.ts
│   └── webpack.config.js
├── shopping-cart-app/
│   ├── src/
│   │   └── app/
│   │       └── shopping/
│   │           ├── cart/
│   │           ├── product-list/
│   │           ├── services/
│   │           ├── shopping.module.ts
│   │           └── shopping-routing.module.ts
│   └── webpack.config.js
└── README.md
```

## 🎨 Features Highlights

### Dynamic Menu System
- Common menu items shown by default
- Menu dynamically updates when switching between apps
- Smooth transitions and visual feedback

### State Management
- Todo app uses localStorage for task persistence
- Shopping cart uses localStorage for cart persistence
- State is maintained across page refreshes

### Responsive Design
- Mobile-friendly layouts
- Adaptive grid systems
- Touch-friendly controls

## 🐛 Troubleshooting

### Port Already in Use
If you get a port conflict error:
```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### Module Federation Errors
- Ensure all three apps are running simultaneously
- Check that ports 4200, 4201, and 4202 are accessible
- Clear browser cache and restart the apps

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- The authentication is simulated (any username/password works)
- Data is stored in browser's localStorage
- Remote apps can be developed and deployed independently
- Each app can be built and served separately

## 🚀 Production Build

To build for production:

```bash
# Shell App
cd shell-app
npm run build

# Todo App
cd ../todo-app
npm run build

# Shopping Cart App
cd ../shopping-cart-app
npm run build
```

## 📄 License

This project is created for demonstration purposes.

## 👥 Contributing

This is a demonstration project showcasing Angular microfrontend architecture with Module Federation.