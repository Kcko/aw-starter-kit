module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);


  var config = {
        css: 'assets/css',
        js: 'assets/js'
  };


    /*-------------------- */


    grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: config,





    /*-------------------- */

      copy: {
        main: {
        nonull: true,
          files: [
            {expand: true, flatten: true, src: ['bower_components/html5shiv/dist/html5shiv.min.js'], dest: '<%= config.js %>/vendor/html5shiv/', filter: 'isFile'},
            {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: '<%= config.js %>/vendor/jquery/', filter: 'isFile'},
            {expand: true, flatten: true, src: ['bower_components/respond/dest/respond.min.js'], dest: '<%= config.js %>/vendor/respond/', filter: 'isFile'},
            {expand: true, flatten: true, src: ['bower_components/selectivizr/selectivizr.js'], dest: '<%= config.js %>/vendor/selectivizr/', filter: 'isFile'}
          ],
        },
      },


    /*-------------------- */

    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("dd.mm.yyyy H:MM:ss") %>, <%= pkg.authors %> */\n\n',
      },
      css: {
        src: ['example1.css', 'example2.css'],
        dest: '<%= config.css %>/build.css',
      },

      js: {
        src: ['example1.js', 'example2.js'],
        dest: '<%= config.js %>/build.js',
      }
    },



    /*-------------------- */

    cssmin: {

        options: {
            sourceMap: false
        },

        front: {
            files: {
              '<%= config.css %>/build.css': [ '<%= config.css %>/css.css']
            }
        }
    },


    /*-------------------- */

    uglify: {
      options: {

          compress: false,
          mangle: false,
          sourceMap: true
      },

      front: {
        files: {

          '<%= config.js %>/build.js': ['<%= config.js %>/main.js']
        }
      }
    }


  });


};
