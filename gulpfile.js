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
  config.mode = "development";
  
  const serverConfig = Object.assign(config, devServerConfig);
  const server = new WebpackDevServer(webpack(serverConfig), {});
  const port = devServerConfig.devServer && devServerConfig.devServer.port ? devServerConfig.devServer.port : "8080";
  const host = devServerConfig.devServer && devServerConfig.devServer.host ? devServerConfig.devServer.host : "localhost";

  server.listen(port, host, function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', `http://${host}:${port}`);
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

  config.mode = production;

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
