# Treelookup App
This aplication is built using [React.js](https://facebook.github.io/react/) and [Redux.js](http://redux.js.org/).

The search [algorithm](https://github.com/muqsith/treelookup-app/blob/master/src/lib/tree-search.js) is based on the provided *Treelookup* [library](https://github.com/muqsith/treelookup-app/blob/master/src/lib/index.e629c34edf.js)
### Installation

This application requires [Node.js](https://nodejs.org/) v6.11.2 to run.

Clone or download [this](https://github.com/muqsith/treelookup-app) git repository and follow below steps.

##### Development mode

Install the dependencies and devDependencies and start the server.

Execute below commands to start in development mode.

```sh
$ cd treelookup-app
$ npm install
$ npm run start
```

Access the application locally at [http://localhost:8888](http://localhost:8888)

##### Production mode

[http-server](https://www.npmjs.com/package/http-server) is used to serve the static files.

Execute below commands to start in production mode.

```sh
$ npm install -g http-server
$ npm install
$ npm run prod
```
Access the application locally at [http://localhost:8080](http://localhost:8080)
