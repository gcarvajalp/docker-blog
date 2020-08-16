<h2 align="center"> PERSONAL BLOG - Developers Tips</h2>

<!-- A spacer -->
<p>&nbsp;</p>

<p>
Blog personal de informática
</p>

<!-- A spacer -->
<p>&nbsp;</p>

## Table of contents

- [Description](#description)
- [Others Projects](#description)
- [Getting Started](#getting-started)
- [Running from command line](#running-from-command-line)
- [Documentation](#documentation)
- [License](#license)

## Description

Proyecto personal para la práctica de nuevas herramientas, entre las cuales se encuentra Docker, Github Actions, ReactJS, Jest, DuckDNS, Raspberry PI entre otras.

## Other Projects

Espacio de enlace con otros futuros proyectos, en construcción.

## Getting Started

Este sistema se puede iniciar a través de los comandos de [Docker](https://www.docker.com/), para más información consulte a la documentación oficial.

## Running from command line

Dockerfile command para construir la imagen del proyecto

```sh
docker build -t webserver-image:v1 .
```

Dockerfile command to deploy image

```sh
docker run -d -p 80:80 webserver-image:v1
```

Dockerfile command to delete image

## Documentation

Procesos encontrados en este repositorio:

## License

Favor de leer [LICENSE](https://github.com/gcarvajalp/docker-blog/blob/master/LICENSE) para mayor información.
