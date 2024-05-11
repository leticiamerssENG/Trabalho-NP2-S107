FROM jenkins/jenkins:latest

WORKDIR /var/lib/jenkins

USER root

RUN apt-get update && apt-get install -y \
    curl \
    git \
    nodejs \
    npm \
    build-essential

COPY package.json package-lock.json

COPY . .

EXPOSE 8080

CMD ["jenkinsd-agent"]
