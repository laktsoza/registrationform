// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/script.js', 'dist/assets').setPublicPath('dist')
    .js('src/login.js', 'dist/assets')
    .js('src/profile.js', 'dist/assets')
    .css('src/style.css', 'dist/assets');