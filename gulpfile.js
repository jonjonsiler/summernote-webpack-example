/*
===============================================================================

Summernote Webpack Example

-------------------------------------------------------------------------------

Since the original application relied on gulp tasks for webpack and 
webpack-dev-server configuration, the base webpack config has been
brought over to the gulpfile, but will still work using the 
webpack-cli interface.

===============================================================================
*/

/*
-------------------------------------------------------------------------------
  - Imports
-------------------------------------------------------------------------------
*/
const { series } = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// Configuration files
const config = require("./config/webpack.config.js")();
const devServerConfig = require("./config/webpack-dev-server.config.js")();

/*
-------------------------------------------------------------------------------
  - Gulp Tasks
-------------------------------------------------------------------------------
*/
/**
 * Serve Gulp task
 * @param {*} cb 
 */
const serve =  (cb) => {
  const serverConfig = Object.assign(config, devServerConfig);
  const server = new WebpackDevServer(webpack(serverConfig), {});

  server.listen(8080, 'localhost', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:8080');
  });

  cb();
}


/**
 * Clean Gulp task
 * @param {*} cb 
 */
const clean = (cb) => {
  // Please put clean code here
  cb();
}


/**
 * Build Gulp task
 * @param {*} cb 
 */
const build = (cb) => {
  webpack(config, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack-build', err);
    }

    gutil.log('[webpack]', stats.toString());
    cb();
  });
}

/*
-------------------------------------------------------------------------------
  - Tasks interface
-------------------------------------------------------------------------------
*/
// Make tasks public
exports.build = build;
exports.serve = serve;
exports.default = series(clean, build);
