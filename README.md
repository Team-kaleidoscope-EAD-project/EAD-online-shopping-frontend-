# Kalei Online Shopping Platform - Frontend  

The **Kalei Online Shopping Platform Frontend** is a responsive, feature-rich e-commerce application built with **React**. It offers a modern and intuitive interface for users to explore, shop, and manage their accounts, combined with secure authentication and cloud integration for enhanced performance and reliability.  

---

## Key Features  

- **Responsive Design**: Optimized for seamless use across devices, from mobile to desktop.  
- **Material UI**: Provides a consistent and modern user interface with pre-styled components.  
- **Custom Styling**: Tailored CSS for additional enhancements and unique branding.  
- **Secure Authentication**: Seamlessly integrated **Keycloak** for login, signup, and user management.  
- **Dynamic Content**: Updates for product listings, and shopping carts.  
- **Dockerized Deployment**: Effortless setup and scaling using **Docker Compose**.  
- **Optimized API Communication**: Simplified backend interactions with **Axios**.  

---

## Prerequisites  

Ensure the following tools are installed on your system:  

- **Node.js** (version 16 or newer)  
- **npm** (included with Node.js)  
- **Docker** and **Docker Compose**  

---

## Setup Instructions  

1. **Clone the Repository**  

   ```bash  
   git clone https://github.com/Team-kaleidoscope-EAD-project/EAD-online-shopping-frontend.git  
   cd EAD-online-shopping-frontend/kalei-frontend  
   ```  

2. **Install Dependencies**  

   ```bash  
   npm install  
   ```  

3. **Configure Keycloak**  

   Update the `keycloak.js` file in the `src/auth/` directory with your Keycloak settings:  

   ```javascript  
   const keycloakConfig = new Keycloak({  
       url: "http://localhost:9090/auth",  
       realm: "your-realm",  
       clientId: "your-client-id",  
   });  
   ```  

   Ensure that Keycloak is running in the background.  

4. **Run the Application**  

   ```bash  
   cd ../  
   docker-compose up --build  
   ```  

   Access the application at `http://localhost:3000`.  

---

## Project Structure  

```plaintext  
EAD-online-shopping-frontend/  
├── kalei-frontend/  
│   ├── src/  
│       ├── assets/          # Static resources (fonts, images)  
│       ├── auth/            # Authentication configuration  
│       ├── components/      # Reusable UI components  
│       ├── data/            # Application data and services  
│       ├── pages/           # Page components (Home, Product, Cart)  
│       ├── routes/          # Route definitions  
│       ├── services/        # API handlers using Axios  
│       ├── App.js           # Main application component  
│       ├── index.js         # Application entry point  
│       ├── Dockerfile       # Frontend Docker configuration  
│   ├── public/              # Static public files  
│   ├── package.json         # Dependency and script management  
├── docker-compose.yml       # Docker Compose setup  
└── README.md                # Documentation  
```  

---

## Technologies Used  

- **React**: Component-based UI library.  
- **Material UI**: Styled and accessible UI components.  
- **CSS**: For layout and styling customizations.  
- **Keycloak**: Secure authentication and user management.  
- **Axios**: HTTP client for efficient API interactions.  
- **Docker & Docker Compose**: Containerization for streamlined deployment.  

---

## Contributing  

We welcome contributions! To get started:  

1. Fork the repository.  
2. Create a new feature branch.  
3. Commit your changes with clear descriptions.  
4. Submit a pull request for review.  

---

## License  

This project is licensed under the MIT License. Please take a look at the LICENSE file for more information.  

---  
