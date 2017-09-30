const merge  = require('webpack-merge');
const { dependencies } = require('./package.json');

const {
    optimize:{CommonsChunkPlugin}
} = require('webpack');

const config = require('./webpack.config');

module.exports = merge(
    config,{
        entry: {
            vendors: Object.keys(dependencies),
        },
        output:{
            filename:'[name].[hash].js',
        },
        module:{
            rules:[

            ]
        },
        plugins: [
            new CommonsChunkPlugin({
                name:'vendors',
                minChunks:Infinity,
            })
        ]
    }
);