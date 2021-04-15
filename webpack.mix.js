// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/script.js', 'dist/assets').setPublicPath('dist');
mix.css('src/style.css', 'dist/assets').setPublicPath('dist');