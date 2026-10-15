#Stage 1 - Build jar
# Maven image
FROM maven:3.9.16-eclipse-temurin-25 AS builder

# Set working directory
WORKDIR /app

# Copy source code from local to container
COPY . /app

RUN mvn clean install -DskipTests=true

#Stage 2 Execute Jar file from above stage
FROM eclipse-temurin:25-jre

WORKDIR /app

#Permission My machine Local
COPY --from=builder /app/target/*.jar /app/TaskManager.jar

CMD ["java","-jar","TaskManager.jar"]
