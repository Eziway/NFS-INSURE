<div align="center">
  <img src="public/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png" alt="NFS Insure Logo" width="300" />
  
  <h3 align="center">NFS Insure Platform</h3>

  <p align="center">
    A comprehensive, modern web application for financial and insurance services.
    <br />
    <a href="#features"><strong>Explore the features »</strong></a>
    <br />
  </p>
</div>

---

## 📖 About The Project

NFS Insure is a premium, fully responsive web application built to facilitate and manage a variety of financial products and applications. The platform provides a sleek user interface for clients to explore services and seamlessly submit applications, while offering staff a robust, secure **Admin Dashboard** for application tracking and user management.

### Key Financial Products
- ☀️ **Solar Financing** - Power your home or business with our solar solutions.
- 💼 **SMME Funding** - Empowering small and medium enterprises.
- 🏠 **Home Loans** - Making your dream home a reality.
- 🏥 **Medical Aid** - Comprehensive health coverage for peace of mind.
- 🌍 **Diplomatic Desk** - Specialized services for missions and embassies.

---

## 🚀 Features

### Client-Facing Portal
- **Modern UI/UX**: Built with a sleek, premium design system featuring glassmorphism and smooth micro-animations.
- **Dynamic Application Forms**: Context-aware forms for every financial product.
- **Interactive Chatbots**: Includes a WhatsApp integration and an AI Chatbot for instant support.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.

### Secure Admin Dashboard
- **Real-Time Analytics**: High-level metrics and visual breakdowns of incoming applications.
- **Application Management**: View, filter, and seamlessly update the status of submitted applications.
- **Interactive Drawers**: View detailed application data via smooth slide-over panels without losing context.
- **Profile Management**: Admins can securely manage their credentials and access levels.

---

## 🛠️ Built With

This project is built using modern, industry-standard web technologies:

* [![Vue][Vue.js]][Vue-url]
* [![TailwindCSS][TailwindCSS]][Tailwind-url]
* [![Vite][Vite.js]][Vite-url]
* [![Supabase][Supabase]][Supabase-url]

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need Node.js and npm installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Eziway/NFS-INSURE.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd NFS-INSURE
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **Setup Environment Variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
   VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
   ```
5. **Run the Development Server**
   ```sh
   npm run dev
   ```

---

## 🗄️ Database Schema (Supabase)

The platform relies on Supabase for backend services, utilizing PostgreSQL tables with Row Level Security (RLS). Ensure the following tables exist to capture applications:

- `solar_applications`
- `smme_applications`
- `home_loan_applications`
- `medical_aid_applications`
- `diplomatic_applications`
- `submissions` (General inquiries)

*(All admin authentication is handled natively through Supabase Auth).*

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- MARKDOWN LINKS & IMAGES -->
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Vite.js]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/
[Supabase]: https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E
[Supabase-url]: https://supabase.com/
