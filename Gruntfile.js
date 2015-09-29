module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('remap-istanbul');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts', 'test/**/*.ts'],
                dest: 'js/',
                options: {
                    module: 'amd',
                    target: 'es5',
					sourceMap: true
                }
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['typescript', 'karma:unit:run', 'remapIstanbul']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        },
        karma: {
            unit:{
                configFile: 'karma.conf.js',
                autoWatch: false,
                background: true,
                singleRun: false
            }
        },
        remapIstanbul:{
            build:{
                files: [{
                    src: 'karmaCoverage/report-json/coverage-final.json',
                    dest: 'remapIstanbul/lcov.info',
                    type: 'lcovonly'
                }]
            }
        }
    });

    grunt.registerTask('default', ['connect', 'open', 'watch']);

}
