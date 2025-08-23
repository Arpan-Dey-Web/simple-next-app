# ✏️ Pencil Store – Next.js 15 App

A simple **pencil-selling web application** built with **Next.js 15 (App Router)**.  
The app allows users to browse pencils, view details, and (after login) manage products via a protected dashboard.  

Authentication is handled using **NextAuth.js** with Google login or credential login.  

---

## 🚀 Features

- 🏠 **Landing Page** – Hero, Highlights, Navbar & Footer  
- 🔐 **Authentication** – NextAuth.js (Google or Credentials)  
- 📝 **Public Pages** – Products, Product Details, About, Contact  
- 📦 **Product Management** – Add new products in a protected dashboard  
- ⚡ **Route Handlers (`/api`)** – Handle fetching & adding products  
- 🌗 **Optional Enhancements** – Dark/Light mode, Toasts, Loading states  


## 📦 Tech Stack

- **Next.js 15 (App Router)**  
- **NextAuth.js** for authentication  
- **Tailwind CSS / Shadcn** for styling  
- **MongoDB** as mock backend  
- **Vercel** for deployment  



## 🔧 Setup & Installation

### 1. Clone the repository

git clone https://github.com/yourusername/pencil-store.git
cd pencil-store

### 2. Install dependencies
npm install

### 3. Configure environment variables

Create a .env.local file in the root directory and add:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Google login (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB (optional if using database)
MONGODB_URI=your_mongo_connection_uri

### 4. Run the development server
npm run dev

