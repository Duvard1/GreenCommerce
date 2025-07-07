# 🌿 Green Commerce Frontend

This is the frontend of **Green Commerce**, a sustainable e-commerce platform built with **Next.js** and **TypeScript**. It connects to various backend microservices to provide functionality such as user authentication, profile management, and product visualization.

---

## ⚙️ Technologies

- ⚛️ **Next.js** (v14+)
- 🟦 **TypeScript**
- 🎨 **Tailwind CSS**
- 🔐 **JWT**-based authentication
- 📦 Backend microservice integration (Auth, User, Image, Products)
- 🧱 File-based routing using `/app` and reusable components under `/components`

---

## 📁 Project Structure

```
└── 📁Frontend
    └── 📁green-commerce
        └── 📁public
        └── 📁src
            └── 📁app
                └── 📁login
                    ├── page.tsx
                └── 📁profile
                    ├── page.tsx
                └── 📁register
                    ├── page.tsx
                ├── favicon.ico
                ├── globals.css
                ├── layout.tsx
                ├── page.tsx
            └── 📁components
                ├── Footer.tsx
                ├── Header.tsx
        ├── package.json
        └── tsconfig.json
```

---


## 🚀 Getting Started

### 1. Clone this repository:

```bash
git clone https://github.com/Duvard1/GreenCommerce.git
cd GreenCommerce
```

### 2. Install dependencies:

```bash
npm install
# or
yarn
```

### 3. Create a `.env.local` file with your API endpoints:

```bash
NEXT_PUBLIC_API_LOGIN=http://44.193.255.85:8082/auth/login
NEXT_PUBLIC_API_REGISTER=http://44.193.255.85:8081/auth/register
NEXT_PUBLIC_API_PROFILE=http://3.216.196.163:8081/user/info
```

### 4. Run the development server:

```bash
npm run dev
```

📍 Open http://localhost:3000 in your browser to view the app.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara
