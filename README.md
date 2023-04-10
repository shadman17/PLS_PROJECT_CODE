# PLS PROJECT CODE

## Image Resizer

### Building Images

The images are processed from a `Camera` directory that is not checked into the repo.
This way, raw data is not exposed publicly. you can uplodad multiple photos in `Camera` directory.

### How to run

```bash
# install dependencies
$ npm ci

# start local webserver and build images
$ npm run build:images

# Measure Execution Time in Windows
$ Measure-Command {npm run build:images}
```


## PARALLEL HASHING

### How to run

- install node js https://nodejs.org/en/download/ if you don't have any

```bash
# build node_modules
$ npm install
or
$ npm install create-node-module
or
$ yarn

# run serial code
$ node hashing-serial.js

# run parallel code 
$ node hashing-parallel.js
```

- execution time is written in the terminal


## Matrix Multiplication 

### How to run

- install node js https://nodejs.org/en/download/ if you don't have any

```bash
# build node_modules
$ npm install
or
$ npm install create-node-module
or
$ yarn

# run serial code
$ node matrix-serial.js

# run parallel code 
$ node matrix-parallel.js
```

- execution time is written in the terminal
