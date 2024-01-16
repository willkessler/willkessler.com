module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css"); // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/images"); // Copy image files to output
  eleventyConfig.addCollection("jobs", function (collection) {
    return collection.getFilteredByGlob("src/jobs/*.md").sort(function (a, b) {
      // Extract file names without extensions
      const fileNameA = a.fileSlug;
      const fileNameB = b.fileSlug;

      // Compare file names for ascending order
      return fileNameA.localeCompare(fileNameB);
    });
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
