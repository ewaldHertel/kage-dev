const purgecss = [
    '@fullhuman/postcss-purgecss',
    {
        content: ['./src/**/*.ts', './src/**/*.js', './src/**/*.tsx'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }
]
module.exports = {
    plugins: [
        'postcss-import',
        'autoprefixer'
    ]
}