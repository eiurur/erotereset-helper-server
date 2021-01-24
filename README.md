# Kantsu-server

Relay-Server for <a href="https://github.com/eiurur/Kantsu" target="_blank">Kantsu</a>

# Usage

## If you use docker

### Launch

    git clone https://github.com/eiurur/Kantsu-server.git
    cd Kantsu-server
    docker-compose build
    docker-compose up

then go to `https://127.0.0.1:5003`.

## else

### Required

- Redis

### Launch

    git clone https://github.com/eiurur/Kantsu-server.git
    cd Kantsu-server
    npm i
    npm start

then go to `https://127.0.0.1:5003`.

# Deploy

    $ npm i now -g
    $ now -e REDIS_URL=<YOUR_REDIS_URL> -e REDIS_PORT=<YOUR_REDIS_PORT> -e REDIS_PASSWORD=<YOUR_REDIS_PASSWORD>
