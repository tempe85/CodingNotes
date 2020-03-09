
# Docker Notes

Important links:
  - [DockerDocs] - Documentation for Docker

Docker commands:

| Command                                    | Description                                                                                                                                                        |
| ------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| docker system prune                        | Removes all stopped containers                                                                                                                                     |  |
| docker logs `<container id>`               | Does not re-run the container, which just output logs from when a container was started                                                                            |  |
| docker stop `<container id>`               | Gives the container 10 seconds to stop, before killing operation                                                                                                   |
| docker kill `<container id>`               | Kills container immediately                                                                                                                                        |
| docker exec -it `<container id> <command>` | Executes a command in a running container<br />-it: Allows input text to the container, i allows you to gain stdin. <br />    -sh: Allows you to gain shell access |
| docker ps --all                            | Shows all docker containers that exist on your system                                                                                                              |
| docker ps                                  | Shows all currently running docker containers                                                                                                                      |

[DockerDocs]: <https://docs.docker.com/get-docker/>

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
* Takes a docker file, runs the commands (the three docker instructions listed previously) and generates an image out of it

```sh
$ docker build -t <name_of_docker_image_tag> .
```
* This tags the docker image, allowing you to refer to it by the tag name
  