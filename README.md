<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png">
  <img src="assets/banner-light.png">
</picture>

Collection of dockerized services to livestream to the 🌎

### Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU make](https://www.gnu.org/software/make/)

### Services

- **Client** - Streaming frontend
- **Gateway** - Routing
- **Restreamer** - Streaming backend

## Installation

1. Create a `.env` file using [`.env.example`](.env.example) as a reference: `cp -n .env{.example,}`.
2. Create a `docker-compose.override.yml` file using [`docker-compose.override.example.yml`](docker-compose.override.example.yml) as a reference: `cp -n docker-compose.override{.example,}.yml`.
3. Build the docker images by running `make build`.

## Setup

Highly recommend [OBS](https://obsproject.com/) for live streaming. Please refer to [this guide](https://datarhei.github.io/restreamer/docs/guides-obs.html) for setup details.

1. Configure Restreamer by visiting `http://localhost:<WEB_PORT>/admin`.
2. Access player by visiting `http://localhost:<WEB_PORT>`.

## Development

Development mode will use [Webpack dev server](https://webpack.js.org/configuration/dev-server/) with live reloading to serve the web client.

1. Run `make dev` to run this collection in development mode.
2. Access player by visiting `http://localhost:<WEB_PORT>`.

## Usage

To start the collection:

```
make up
```

To stop the collection:

```
make down
```

To start the collection in development mode:

```
make dev
```

To view logs of one or more running services:

```
make logs [service="<service>"] [file="/path/to/log/file"]
```

To build docker images:

```
make build
```

To remove docker images:

```
make clean
```

## ENV Options

| Option                 | Description                                   | Default             |
| ---------------------- | --------------------------------------------- | ------------------- |
| `WEB_PORT`             | Host web port.                                | `8080`              |
| `RTMP_PORT`            | Host RTMP port.                               | `1935`              |
| `RESTREAMER_DATA_PATH` | Host path for Restreamer configuration files. | `./restreamer/data` |
| `RESTREAMER_PASSWORD`  | Password for the Restreamer backend.          | `password`          |
| `RESTREAMER_TOKEN`     | RTMP publish token.                           | `secret`            |
| `RESTREAMER_USERNAME`  | Username for the Restreamer backend.          | `username`          |
