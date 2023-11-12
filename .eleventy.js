
const {formatDate} = require("./11ty_layout/filters/dates.js")

module.exports = function(eleventyConfig) {
  // Filter definitions
  eleventyConfig.addFilter('formatDate', formatDate);


  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.html');
  eleventyConfig.addLayoutAlias('article', 'article.html');

  // Copy '11ty_layout/css/' to 'docs/css/'
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy({"11ty_layout/css" : "css"});
  eleventyConfig.addPassthroughCopy({"raw/_data/*.css" : "css"});

  return {
    dir: {
      // These values are both relative to the input directory (raw/).
      includes: "../11ty_layout",
      layouts: "../11ty_layout",
      data: "_data"
    }
  }
};

