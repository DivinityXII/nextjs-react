const withSass = require('@zeit/next-sass')
module.exports = withSass({
    distDir: 'build',
    pageExtensions: ['mdx', 'jsx', 'js'],
    cssModules: true,
    env: {
        customKey: 'value',
    },
})