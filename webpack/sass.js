
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function(paths) {
    return {
        module: {
            rules: [
              {
                test: /\.sass$/,
                include: paths,
                use: [
                  'style-loader', 
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../'
                    }
                  },
                  'css-loader',
                  'postcss-loader',    
                  'resolve-url-loader',              
                  {
                    loader: 'sass-loader',
                    
                }
                ]
              },
              {
                test: /\.css$/,
                include: paths,
                use:[
                  'style-loader', 
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../'
                    }
                  },
                  'css-loader',
                  'postcss-loader',
                  'resolve-url-loader',
                ]
            }
            ]
          },
          plugins: [
            new MiniCssExtractPlugin({
              filename: './css/style.css',
        
            })
          ]
    }
};