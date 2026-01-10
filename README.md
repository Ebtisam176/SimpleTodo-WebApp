# SimpleTodo-WebApp

## Description
A simple To-Do List web application built with HTML, CSS, and JavaScript.  
To write a list to do in the day.

## Tech Stack
- HTML
- CSS
- JavaScript
- Docker (nginx)

## How to Run with Docker
1. Build the Docker image: docker build -t simpletodo-app .

2. Run the container: docker run -d -p 8080:80 --name simpletodo-container simpletodo-app

3. Open your browser and go to: http://localhost:8080


## Stop & Cleanup
docker stop simpletodo-container
docker rm simpletodo-container


## Testing
- Add and delete tasks to ensure functionality.

## Attribution
- This is an original project.

## Deploying on VPS (Back4App)
 The project was deployed using Back4App Web Deployment. Docker was already available on the platform, so no manual installation was required. The repository was selected, deployed, and the application became accessible via a public URL.

 ## Production URL
 https://mydashboard-4g19pccd.b4a.run/
 
 