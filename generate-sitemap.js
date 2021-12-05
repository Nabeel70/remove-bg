const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
    const prettierConfig = await prettier.resolveConfig('./src/components/RemoveBackground.js')
    const pages = await globby([
        './src/components/RemoveBackground.js',
        './src/components/Header.js',
        './src/components/Footer.js'
    ])
})();