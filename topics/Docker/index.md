<small>[Return Home](../../README.md)</small>

# Docker Notes

Important links:

- [DockerDocs] - Documentation for Docker

Docker commands:

| Command                                    | Description                                                                                                                                                     |
| ------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| docker system prune                        | Removes all stopped containers                                                                                                                                  |  |
| docker logs `<container id>`               | Does not re-run the container, which just output logs from when a container was started                                                                         |  |
| docker stop `<container id>`               | Gives the container 10 seconds to stop, before killing operation                                                                                                |
| docker kill `<container id>`               | Kills container immediately                                                                                                                                     |
| docker exec -it `<container id> <command>` | Executes a command in a running container<br />-it: Allows input text to the container, i allows you to gain stdin. <br /> -sh: Allows you to gain shell access |
| docker ps --all                            | Shows all docker containers that exist on your system                                                                                                           |
| docker ps                                  | Shows all currently running docker containers                                                                                                                   |
| docker run -it `<container id>` sh         | Allows you to gain shell access to an already built docker container (not currently running like with exec)                                                     |

[dockerdocs]: https://docs.docker.com/get-docker/

# Docker instructions

- FROM `<command>`
  - Starting point (base image, temp container) for the image you are creating, e.g. alpine
- RUN `<command>`
  - Run a command on the base image. Sets up depedencies.
- CMD `<command>`
  - Setting primary command of the created container (what command it runs when container starts)

```sh
$ docker build .
```

- Takes a docker file, runs the commands (the three docker instructions listed previously) and generates an image out of it

```sh
$ docker build -t <name_of_docker_image_tag> .
```

- This tags the docker image, allowing you to refer to it by the tag name

### Port mapping

- By default a docker container cannot receive outside traffic to the port the app is running on, because it is listening to a port inside of the container
- To get around this you need to do what's called `port mapping`

```docker
docker run -p 8080 : 8080 <image id>
```

- The first port number here is the local host port and the second port is the port that traffic will be routed to inside of the container. These ports <u>don't</u> have to be identical.

> Redis: In memory datastore. Tiny database that sits inside of memory

#### Connecting two docker containers

- Docker's CLI (command line interface) has building Networking features but is rarely used
- `docker-compose`
  - automates a lot of the commands needed to work with Docker's CLI.
  - Used to start multiple Docker containers at the same time
  - Gets installed along with Docker
  - Run with a file `docker-compose.yml`
    - When two docker images are created in a `docker-compose` file they will automatically have access to each other without having to open up ports between the two. The only port declaration is between container and the local machine.

Docker compose command mapping:

<img src="./../../images/docker-compose.JPG" width="50%">

Docker Compose commands:
|Command| Description|
|-------|------------|
|`docker-compose up -d` | Launch in background
|`docker-compose down` | Stop containers
|`docker-compose up`| Start containers
|`docker-compose up --build`| Builds or rebuilds containers

#### Automatic container restarts

- If a container exits with a status code of '0' it means that we meant to exit
  - Anything other than '0' means an error occurred.
  - This affects how Docker decides to restart a container

Restart policies in the docker-compose file:
|Policy|Description|
|---|---|
|`"no"` | Never attempt to restart this container if it stops or crashes. Note: This must be in quotes
| `always` | If this container stops for any reason always attempt to restart
|`on-failure`| Only restart if the container stops with an error code
|`unless-stopped`| Always restart unless we (the devs) forced stop
|`docker-compose ps`| Finds all running containers to a `docker-compose.yml` file (command must be run in file where `docker-compose.yml` file exists)
