# Dockerfile cho worker (Java)
FROM openjdk:11-jre-slim

# Cài đặt Maven
RUN apt-get update && apt-get install -y maven

WORKDIR /app

COPY pom.xml /app/

# Cài đặt các dependencies của Maven
RUN mvn clean install

COPY . /app/

CMD ["java", "-jar", "target/worker.jar"]
