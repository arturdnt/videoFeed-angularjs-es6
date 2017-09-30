const {resolve} = require('path');
const htmlPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app:'./index',
    },
    context:resolve(__dirname,'src'),
    output:{
        path:resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                include: resolve(__dirname, 'src'),
                loader:'babel-loader',
                options:{
                    presets:[
                        ['env',{modules:false}],                    ]
                }
            },
            { 
                test: /\.html$/, 
                loader: 'raw-loader' 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractText.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'raw-loader', options: { importLoaders: 1 } },
                    ],
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractText.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "raw-loader",
                            options: { importLoaders: 1, sourceMap: true } // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader", // compiles Sass to CSS
                            options: { sourceMap: true } 
                        },
                    ],
                })
            },
        ]
    },
    resolve:{
        extensions:['.js','.json'],
    },
    plugins: [
        new ExtractText({ filename: 'videofeed.css' }),        
        new htmlPlugin(
            {
                title:'Video Feed App',
                template: './index.html'
            }
        ),
    ]
}