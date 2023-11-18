
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const { imports } = require("./11ty_layout/include.js")

module.exports = function(eleventyConfig) {
  // Include the template's imports
  imports(eleventyConfig);

  // Add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.html');
  eleventyConfig.addLayoutAlias('article', 'article.html');
  eleventyConfig.addLayoutAlias('hero', 'hero.html');

  // Keeps the same directory structure.s
  eleventyConfig.addPassthroughCopy({"raw/_data/*.css" : "css"});
  eleventyConfig.addPassthroughCopy({"11ty_layout/css" : "css"});
  eleventyConfig.addPassthroughCopy({"11ty_layout/js" : "js"});
  eleventyConfig.addPassthroughCopy({"11ty_layout/font" : "font"});

  return {
    dir: {
      // These values are both relative to the input directory (raw/).
      includes: "../11ty_layout",
      layouts: "../11ty_layout",
      data: "_data"
    }
  }
};

