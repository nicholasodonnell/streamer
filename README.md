<img src="assets/logo.gif" />

Collection of dockerized services to livestream to the 🌎

### Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU make](https://www.gnu.org/software/make/)

### Services

- **Restreamer** - Video streaming in real time.
- **NGINX** - Webplayer hosting.

## Installation

1. Create a `.env` file using [`.env.example`](.env.example) as a reference: `cp -n .env{.example,}`.
2. Build the docker images by running `make build`.

## Setup

Highly recommend [OBS](https://obsproject.com/) for live streaming. Please refer to [this guide](https://datarhei.github.io/restreamer/docs/guides-obs.html) for setup details.

1. Configure Restreamer by visiting `http://<YOUR_IP>:<RESTREAMER_UI_PORT>`.
2. Access the player by visiting `http://<YOUR_IP>:<PLAYER_PORT>`.

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

| Option                 | Description                                                 | Default                             |
| ---------------------- | ----------------------------------------------------------- | ----------------------------------- |
| `PLAYER_PORT`          | Host port for the webplayer.                                | `8005`                              |
| `PLAYER_SOURCE_URL`    | Publicly accessible URL for the embedded Restreamer player. | `http://localhost:8080/player.html` |
| `RESTREAMER_DATA`      | Host location for Restreamer configuration files.           | `./restreamer`                      |
| `RESTREAMER_PASSWORD`  | Password for the Restreamer backend.                        | `password`                          |
| `RESTREAMER_RTMP_PORT` | Host RTMP port.                                             | `1935`                              |
| `RESTREAMER_TOKEN`     | RTMP publish token.                                         | `secret`                            |
| `RESTREAMER_UI_PORT`   | Host port for the Restreamer web interface.                 | `8080`                              |
| `RESTREAMER_USERNAME`  | Username for the Restreamer backend.                        | `username`                          |
