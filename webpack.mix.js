const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Disable OS notifications
mix.disableNotifications();

// Compile JavaScript
mix.js('src/js/main.js', 'web/assets/js')
   .sourceMaps();

// Compile SCSS
mix.sass('src/scss/main.scss', 'web/assets/css')
   .sourceMaps();

// Copy images
mix.copyDirectory('src/images', 'web/assets/images');

// Options
mix.options({
   processCssUrls: false, // Don't process URLs in CSS
});

// Configure webpack for better asset handling
mix.webpackConfig({
   stats: {
      children: true,
   },
});
