module.exports = function(eleventyConfig) {
  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.html');

  // Copy '11ty_layout/css/' to 'docs/css/'
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy({"11ty_layout/css" : "css"});

  return {
    dir: {
      // These values are both relative to the input directory (raw/).
      includes: "../11ty_layout",
      layouts: "../11ty_layout",
      data: "_data"
    }
  }
};
