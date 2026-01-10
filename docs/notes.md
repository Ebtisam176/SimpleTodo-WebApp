# Technical Notes

## Biggest Docker Problem and Solution
The main problem I faced was that the application did not appear in the browser and only the default Nginx page was shown.
This happened because the project files were not being copied correctly into the container.

I solved this by checking the Dockerfile and making sure that the project files were copied into the correct Nginx directory:
`/usr/share/nginx/html`.

After rebuilding the Docker image and running the container again, the application worked correctly.

## Most Important Git/GitHub Lesson Learned
The most important thing I learned is how Git tracks project changes using commits, and how GitHub stores these commits remotely.

I learned how to:
- Initialize a Git repository
- Add and commit files with meaningful commit messages
- Connect a local project to a remote GitHub repository
- Push changes to GitHub
- Understand how branches and upstream tracking work

This helped me understand how developers collaborate and manage project versions professionally.

##  update Deploying on VPS (Back4App)
At first, finding a free VPS was a bit challenging, so I used Back4App for the deployment link, like the one our instructor provided. It was easy to set up, and I felt happy when the app was working online. Later, I realized the link was temporary, but fortunately, I discovered this issue early. Even though it was temporary, this experience helped me understand deployment and Docker better, and it boosted my confidence in using Git, GitHub, and Docker for real projects.