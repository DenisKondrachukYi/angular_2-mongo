const webpack = require('webpack');
const helpers = require('./helpers');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
module.exports = function(options){
    return {
            /**
             * Cache generated modules and chunks to improve performance for multiple incremental builds.
             * This is enabled by default in watch mode.
             * You can pass false to disable it.
             *
             * See: http://webpack.github.io/docs/configuration.html#cache
             */
            //cache: false,
            /**
             * The entry point for the bundle
             * Our Angular.js app
             *
             * See: http://webpack.github.io/docs/configuration.html#entry
             */
            entry: {
                'app': helpers.root('') + '/index.ts'
            },
            resolve: {
                extensions: ['.ts', '.js']
            },
            module: {
                rules: [
                    /**
                     * Typescript loader support for .ts
                     *
                     * Component Template/Style integration using `angular2-template-loader`
                     * Angular 2 lazy loading (async routes) via `ng-router-loader`
                     *
                     * `ng-router-loader` expects vanilla JavaScript code, not TypeScript code. This is why the
                     * order of the loader matter.
                     *
                     * See: https://github.com/s-panferov/awesome-typescript-loader
                     * See: https://github.com/TheLarkInn/angular2-template-loader
                     * See: https://github.com/shlomiassaf/ng-router-loader
                     */
                    {
                        test: /\.ts$/,
                        use: [
                            {
                                loader: 'awesome-typescript-loader',
                                options: {
                                    configFileName: 'tsconfig.webpack.json'
                                }
                            }
                        ],
                        exclude: [/\.(spec|e2e)\.ts$/]
                    },
                    /**
                     * Json loader support for *.json files.
                     *
                     * See: https://github.com/webpack/json-loader
                     */
                    {
                        test: /\.json$/,
                        use: 'json-loader'
                    }
                ]
        },
        /**
         * Add additional plugins to the compiler.
         *
         * See: http://webpack.github.io/docs/configuration.html#plugins
         */
        plugins: [
            /**
             * Plugin: ForkCheckerPlugin
             * Description: Do type checking in a separate process, so webpack don't need to wait.
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
             */
            new CheckerPlugin()
        ],
        /**
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
                crypto: 'empty',
                process: true,
                module: false,
                clearImmediate: false,
                setImmediate: false
        }
    }
};