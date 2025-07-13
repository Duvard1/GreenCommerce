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
NEXT_PUBLIC_API_REGISTER_URL=http://44...
NEXT_PUBLIC_API_LOGIN_URL=http://44...
NEXT_PUBLIC_API_USER_URL=http://3...
NEXT_PUBLIC_API_PROFILE_URL=http://3...
NEXT_PUBLIC_API_DELETE_URL=http://3...
NEXT_PUBLIC_API_PRODUCT_URL=http://52...
NEXT_PUBLIC_API_GRAPHQL_URL=http://52...
```

### 4. Run the development server:

```bash
npm run dev
```

📍 Open http://localhost:3000 in your browser to view the app.

---

## 🐳 Docker Deployment

1. Create a .env file (if you haven't):

```bash
cp .env.local .env
```

2. Build the Docker image:

```bash
docker build -t your_username/greencommerce-frontend .
```

3. Run the container:

```bash
docker run -d -p 3000:3000 --env-file .env your_username/greencommerce-frontend
```

✅ Ensure port 80 (or 3000) is open in your EC2 security group.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara
