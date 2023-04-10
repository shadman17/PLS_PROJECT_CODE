# PLS PROJECT CODE

## Building Images

The images are processed from a `Camera` directory that is not checked into the repo.
This way, raw data is stripped before going public. you can uplodad multiple photos in `Camera` directory.

The "full" size images in `public` are now constrained by size and compressed to save file size.

Run the project:

```bash
# install dependencies
$ npm ci

# start local webserver and build images
$ npm run build:images
```

## PARALLEL HASHING

### How to run
- install node js https://nodejs.org/en/download/ if you don't have any
- if you have node on your computer, run 'npm install' / 'npm install create-node-module' in terminal
- if you use yarn instead of npm, run 'yarn' in terminal
- run parallel code : 'node hashing-parallel.js'
- run serial code : 'node hashing-serial.js'
- execution times is written in the terminal


## Matrix Multiplication 

### How to run
- run parallel code : 'node matrix-parallel.js' 
- run serial code : 'node matrix-serial.js' 
- number of times needed written in the terminal
