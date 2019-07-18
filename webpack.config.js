// init
const path = require('path');
const PUBLIC_DIR = path.join(__dirname, 'public');

// rules
const ruleBabel = {
    test: /\.js$/,
    use: { loader: 'babel-loader' },
    exclude: /node_modules/
};

const ruleStyle = {
    test: /\.s?css/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
    ],
    exclude: /node_modules/
}

// export
module.exports = {
    entry:     './src/index.js',
    output:    { path: PUBLIC_DIR, filename: 'bundle.js' },
    mode:       'development',
    devtool:    'cheap-module-eval-source-map',
    devServer: { contentBase: PUBLIC_DIR, historyApiFallback: true },
    module: {
        rules: [ ruleBabel, ruleStyle ]
    }
}
