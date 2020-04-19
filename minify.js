const minify = require('html-minifier').minify;
const fs = require('fs');

const unminified = fs.readFileSync('index.html', 'utf8');
const minified = minify(unminified, {
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true
});

fs.writeFileSync('index.min.html', minified);
