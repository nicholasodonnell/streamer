<img src="assets/logo.gif" />

Collection of dockerized services to livestream to the 🌎

### Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU make](https://www.gnu.org/software/make/)

### Services

- **Restreamer** - Video streaming in real time.
- **NGINX** - Player hosting & gateway.

## Installation

1. Create a `.env` file using [`.env.example`](.env.example) as a reference: `cp -n .env{.example,}`.
2. Build the docker images by running `make build`.

## Setup

Highly recommend [OBS](https://obsproject.com/) for live streaming. Please refer to [this guide](https://datarhei.github.io/restreamer/docs/guides-obs.html) for setup details.

1. Configure Restreamer by visiting `http://<YOUR_IP>:<WEB_PORT>/restreamer`.
2. Access player by visiting `http://<YOUR_IP>:<WEB_PORT>`.

## Usage

To start the collection:

```
make up
```

To stop the collection:

```
make down
```

To view logs of one or more running services:

```
make logs [service="<service>"] [file="/path/to/log/file"]
```

To build docker images:

```
make build
```

To pull docker images:

```
make pull
```

To remove docker images:

```
make clean
```

## ENV Options

| Option                 | Description                                   | Default        |
| ---------------------- | --------------------------------------------- | -------------- |
| `WEB_PORT`             | Host web port.                                | `8005`         |
| `RTMP_PORT`            | Host RTMP port.                               | `1935`         |
| `RESTREAMER_DATA_PATH` | Host path for Restreamer configuration files. | `./restreamer` |
| `RESTREAMER_PASSWORD`  | Password for the Restreamer backend.          | `password`     |
| `RESTREAMER_TOKEN`     | RTMP publish token.                           | `secret`       |
| `RESTREAMER_USERNAME`  | Username for the Restreamer backend.          | `username`     |
