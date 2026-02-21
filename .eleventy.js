const path = require("node:path");
const sass = require("sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    useLayout: false,
    compile: async function (inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) return;

      const includeDir = this.config?.dir?.includes
        ? path.join(parsed.dir || ".", this.config.dir.includes)
        : path.join(parsed.dir || ".", "_includes");
      const result = await sass.compileStringAsync(inputContent, {
        loadPaths: [parsed.dir || ".", includeDir],
      });
      if (typeof this.addDependencies === "function") {
        this.addDependencies(inputPath, result.loadedUrls);
      }
      return async (data) => result.css;
    },
  });
  return {
    dir: { input: "src", output: "public" },
    templateFormats: ["md", "njk", "scss"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
