/*
 * Resource HTML Starter kit GruntFile
 * @author Kirk McCutcheon
 * @version 0.1.0
 * @description This file handles creating a development server and compiling the necessary files
 * it also has a build task for concatination,minification and image optimization.
 * Todo: Add Less support and maybe SFTP grunt task for deployment.
 *
 */

var lrSnippet = require("grunt-contrib-livereload/lib/utils").livereloadSnippet;

var mountFolder = function(connect, dir) {
    "use strict";
    return connect.static(require("path").resolve(dir));
};

module.exports = function(grunt) {
    "use strict";

    // load all grunt tasks
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // configurable paths
    var resConfig = {
        app: "../",
        dist: "../../production"
    };

    grunt.initConfig({
        res: resConfig,
        watch: {
            compass: {
                files: ["../assets/scss/{,*/}*.{scss,sass}"],
                tasks: ["compass"]
            },
            livereload: {
                files: [
                    "../*.html",
                    ".tmp/assets/css/{,*/}*.css",
                    "../assets/js/{,*/}*.js",
                    "../assets/images/{,*/}*.{png,jpg,jpeg,webp,gif}"
                ],
                tasks: ["livereload"]
            }
        },
        livereload: {
            // 35729 Default livereload listening port.
            port: 35729
        },
        connect: {
            options: {
                port: grunt.option("port") || 8989,
                // change this to "0.0.0.0" to access the server from outside
                hostname: "localhost"
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, ".tmp"),
                            mountFolder(connect, "../")];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, "<%= res.dist %>")];
                    }
                }
            }
        },
        open: {
            server: {
                path: "http://localhost:<%= connect.options.port %>"
            }
        },
        clean: {
            options: {
                force: true
            },
            dist: [".tmp", "<%= res.dist %>"],
            server: ".tmp",
            compass: ".sass-cache"
        },
        jshint: {
            options: {
                jshintrc: "../.jshintrc"
            },
            all: [
                "Gruntfile.js",
                "../assets/js/*.js"
            ]
        },
        compass: {
            options: {
                sassDir: "../assets/scss",
                cssDir: ".tmp/assets/css",
                imagesDir: "../assets/images",
                javascriptsDir: "../assets/js",
                fontsDir: "../assets/fonts",
                importPath: "../assets/js/lib",
                relativeAssets: true
            },
            dist: {
                options: {
                    cssDir: "../assets/css",
                    debugInfo: false,
                    force: true,
                    outputStyle: "compressed"
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        uglify: {
            dist: {
                files: "<%= res.dist %>/assets/js/main.js"
            }
        },
        useminPrepare: {
            html: "../index.html",
            options: {
                dest: "<%= res.dist %>"
            }
        },
        usemin: {
            html: ["<%= res.dist %>/{,*/}*.html"],
            css: ["<%= res.dist %>/assets/css/{,*/}*.css"],
            options: {
                dirs: ["<%= res.dist %>"]
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "../assets/images",
                    src: "{,*/}*.{png,jpg,jpeg}",
                    dest: "<%= res.dist %>/assets/images"
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    "<%= res.dist %>/assets/css/styles.css": [
                        ".tmp/assets/css/{,*/}*.css",
                        "../assets/css/{,*/}*.css"
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                },
                files: [{
                    expand: true,
                    cwd: "../",
                    src: "{,*/}*.html",
                    dest: "<%= res.dist %>"
                }]
            },
            deploy: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: "<%= res.dist %>",
                    src: "{,*/}*.html",
                    dest: "<%= res.dist %>"
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "../",
                    dest: "<%= res.dist %>",
                    src: [
                        "assets/images/*.{ico,txt,gif}",
                        "assets/css/{,*/}*.css",
                        "VERSION.md",
                        "robots.txt",
                        ".htaccess",
                        "assets/fonts/*",
                        "assets/media/*",
                        "assets/js/lib/*"
                    ]
                }]
            }
        },
        docco: {
            src: ["../*.md"],
            options: {
                layout: "linear",
                output: "../documentation"
            }
        }

    });

    grunt.renameTask("regarde", "watch");

    grunt.registerTask("server", function(target) {
        if (target === "dist") {
            return grunt.task.run(["build", "open", "connect:dist:keepalive"]);
        }

        grunt.task.run([
            "clean:server",
            "compass:server",
            "livereload-start",
            "connect:livereload",
            "open",
            "watch"
        ]);
    });

    grunt.registerTask("build", [
        "clean:dist",
        "compass:dist",
        "useminPrepare",
        "imagemin",
        "concat",
        "uglify",
        "copy",
        "htmlmin:dist",
        "usemin",
        "htmlmin:deploy"
    ]);

    grunt.registerTask("default", [
        "jshint",
        "build"
    ]);

    grunt.registerTask("docs", [
        "docco"
    ]);

    grunt.registerTask("cleanall", [
        "clean:dist",
        "clean:compass",
        "clean:server"
    ]);

};
