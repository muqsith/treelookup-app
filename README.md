# Treelookup App
This aplication is built using [React.js](https://facebook.github.io/react/) and [Redux.js](http://redux.js.org/).

The search [algorithm](https://github.com/muqsith/treelookup-app/blob/master/src/lib/tree-search.js) is based on the provided *Treelookup* [library](https://github.com/muqsith/treelookup-app/blob/master/src/lib/index.e629c34edf.js)
### Installation

This application requires [Node.js](https://nodejs.org/) v6.11.2 to run.

##### Development mode

Install the dependencies and devDependencies and start the server.

```sh
$ cd treelookup-app
$ npm install
$ npm run start
```

##### Production mode

[http-server](https://www.npmjs.com/package/http-server) is used to serve the static files.

```sh
$ npm install -g http-server
$ npm install
$ npm run prod
```

