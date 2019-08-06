const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bodhicougar/Projects/gatsbyjs/backroads/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/bodhicougar/Projects/gatsbyjs/backroads/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/bodhicougar/Projects/gatsbyjs/backroads/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bodhicougar/Projects/gatsbyjs/backroads/src/pages/index.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/home/bodhicougar/Projects/gatsbyjs/backroads/src/pages/products.js")))
}

