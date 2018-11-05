# Kummit 0.1.0

## Prerequisites

For development you will need the following things properly installed on your computer.

* [PostgreSQL](https://www.postgresql.org/)
* [Git](https://git-scm.com/)
* [Node.js 7.6.0+](https://nodejs.org/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/) (for testing)

## Installation

* `git clone <repository-url>` this repository
* Create a PostgreSQL database and user

API server
``` bash
cd api
npm install
# Copy db config file and add your credentials
cp config/db.example.js config/db.js 
knex migrate:latest
```

Frontend Server
```
cd app
npm install
```

## Running / Development

start the api server
```
cd api
node index.js
```

start ember development (in a seperate terminal)
```
cd app
ember serve
```

Visit Kummit at [http://localhost:4200](http://localhost:4200).

## Docker
Docker can be used to get the api server up and running without needing to install and configure postgresql
```
docker-compose up
```