## Nginx

`Webserver` that can also be used as a `reverse proxy`, `load balancer`, mail proxy and `HTTP cache`.

- Ingress controller
  - Accepts connections from outside a kubernetes cluster and handles it inside the cluster
    - Reverse proxy
  - Load balancer

* In containers
  - Web server

- The most used webserver in the internet (33.6%)
- Extremeley fast and efficient
- Similar applications
  - IIS
    - Windows only
  - Apache
  - HAProxy

### Reverse proxy

- Web proxy
  - ZScaler is an example, cloud based proxy solution
  - Reverse proxy is the other way around
    - A web server that takes a request and directs it to a server (instead of a client)
- Why?
  - Endpoint consolidation
    - Expose one instance out in the world, and define how each application connects to it
  - SSL centralization
    - Don't have to worry about making new certificates for every application being deployed
  - Security
    - Security by obscurity, don't have to worry about every single applications security since requests go through the nginx proxy
  - Custom behavior
    - How to direct requests to different portions of your application (swagger)

### Load balancer

- Accepts HTTP requetss and distributes them to multiple servers
- Ensures load is distributed somewhat evenly to allow horizontal scaling
- Helps mitigate outages and downtime for deployments
  - At least one application handling requests when a deployment happens

### What's a web server

- Accepts and directly handles HTTP requests
- Provides access to resources via HTTP; images, html, js, ect.

### Webservers for react

- Webpack serve
  - Webpack is a JS compiler
  - A webserver
  - Not meant for production deployments
- vite [dev|serve]
  - Not meant for production deployments
- NGINX
  - Static assests (jpg, html, ect)
  - .js files
