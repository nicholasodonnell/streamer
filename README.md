<img src="assets/banner.png" />

Collection of dockerized services to livestream to the 🌎

### Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU make](https://www.gnu.org/software/make/)

### Services

- **Client** - Webplayer frontend
- **Gateway** - Routing
- **Restreamer** - Streaming backend

## Installation

1. Create a `.env` file using [`.env.example`](.env.example) as a reference: `cp -n .env{.example,}`.
2. Build the docker images by running `make build`.

## Setup

Highly recommend [OBS](https://obsproject.com/) for live streaming. Please refer to [this guide](https://datarhei.github.io/restreamer/docs/guides-obs.html) for setup details.

1. Configure Restreamer by visiting `http://<YOUR_IP>:<WEB_PORT>/restreamer`.
2. Access player by visiting `http://<YOUR_IP>:<WEB_PORT>`.

## Development

Development mode will use [Webpack dev server](https://webpack.js.org/configuration/dev-server/) with live reloading to serve the web client.

1. Run `make dev` to run this collection in development mode.
2. Access player by visiting `http://<YOUR_IP>:<DEV_PORT>`.

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

| Option                 | Description                                   | Default        |
| ---------------------- | --------------------------------------------- | -------------- |
| `WEB_PORT`             | Host web port.                                | `8080`         |
| `RTMP_PORT`            | Host RTMP port.                               | `1935`         |
| `DEV_PORT`             | Host Webpack dev server port.                 | `3000`         |
| `RESTREAMER_DATA_PATH` | Host path for Restreamer configuration files. | `./restreamer` |
| `RESTREAMER_PASSWORD`  | Password for the Restreamer backend.          | `password`     |
| `RESTREAMER_TOKEN`     | RTMP publish token.                           | `secret`       |
| `RESTREAMER_USERNAME`  | Username for the Restreamer backend.          | `username`     |
