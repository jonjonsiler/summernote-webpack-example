# summernote-webpack-example

The original application (created for summernote 0.8.1) relied on gulp tasks for webpack and webpack-dev-server configuration, the base webpack config has been extracted to a js file for import. Gulp will import the extracted config files and webpack bundling will still work using the webpack-cli interface.

## Versions
* "bootstrap": "^4.4.1"
* "codemirror": "^5.50.2"
* "font-awesome": "^4.7.0"
* "jquery": "^3.4.1"
* "summernote": "^0.8.14"

## Installation
```
# gulp-cli is need by gulp; you might have this installed already
npm install --global gulp

# install modules
npm install

# start webpack dev server
npx gulp serve

# build using gulp
npx gulp build

# build using webpack
npm run build
```
