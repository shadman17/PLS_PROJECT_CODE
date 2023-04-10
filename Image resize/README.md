## Building Images

The images are processed from a `Camera` directory that is not checked into the repo.
This way, raw data is stripped before going public.

The "full" size images in `public` are now constrained by size and compressed to save file size.

Run the project:

```bash
# install dependencies
$ npm ci

# start local webserver and build images
$ npm run build:images
```
