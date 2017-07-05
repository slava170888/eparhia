/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
    gulp.src([
        'core-js/client/*.js',
        'systemjs/dist/*.js',
        'reflect-metadata/*.js',
        'rxjs/**',
        'zone.js/dist/*.js', 
        '@angular/**/bundles/*.js', 
        'bootstrap/dist/js/*.js', 
        'angular-l10n/bundles/*.js' 
    ], {
            cwd: "node_modules/**" 
        })
        .pipe(gulp.dest("./wwwroot/lib"));
});