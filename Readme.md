
# ToDoApp

A full-stack To-Do application built using Spring Boot, React.js, and MySQL.

This project is also being used to learn and implement DevOps practices, including Git, Docker, Linux, and CI/CD with GitHub Actions.

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Spring Boot Actuator
- Maven

### Frontend
- React.js
- JavaScript
- npm

### Database
- MySQL

### DevOps (Planned)
- Git and GitHub
- Docker and Docker Compose
- Linux
- GitHub Actions for CI/CD

## Project Structure

```text
ToDoApp/
├── TaskManager/              # Spring Boot backend
├── task-manager-frontend/    # React frontend
├── README.md
└── .gitignore
```

## Prerequisites

Install the following before running the application:

- Java version compatible with the backend
- Maven, or the Maven Wrapper included in the project
- Node.js and npm
- MySQL Server
- Git

Docker and Docker Compose will be introduced as part of the DevOps implementation.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/swatishaw1/ToDoApp.git
cd ToDoApp
```

### 2. Configure MySQL

Start your MySQL server and create a database for the application.

```sql
CREATE DATABASE todoapp;
```

Configure the database connection in the backend's
`application.properties` or `application.yml` file.

Example configuration:

```properties
spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/todoapp}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD}
```

The example assumes that your application uses Spring Boot's standard datasource properties. Adjust the configuration to match your existing project.

Do not commit database passwords or other secrets to GitHub.

### 3. Run the Backend

Open a terminal:

```bash
cd TaskManager
```

If the project includes Maven Wrapper, use:

Linux/macOS:

```bash
./mvnw spring-boot:run
```

Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

Alternatively, if Maven is installed:

```bash
mvn spring-boot:run
```

The backend will start on the configured Spring Boot port, typically `8080`.

### 4. Run the Frontend

Open a separate terminal from the repository root:

```bash
cd task-manager-frontend
npm install
npm run dev
```

If your project uses Create React App instead of Vite, use the script defined in `package.json`, commonly:

```bash
npm start
```

Open the local URL displayed in your terminal.

Ensure the frontend is configured to communicate with the correct backend URL.

## Health Check

Spring Boot Actuator provides application monitoring endpoints.

If the health endpoint is enabled and exposed, open:

```text
http://localhost:8080/actuator/health
```

A healthy application typically returns:

```json
{
  "status": "UP"
}
```

The actual response can include additional component details depending on your Actuator configuration.


Example:

```bash
git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push -u origin feature/your-feature
```

