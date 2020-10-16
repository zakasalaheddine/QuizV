const path = require("path");
const withAssetsImport = require("next-assets-import");
module.exports = withAssetsImport({
  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["context"] = path.join(__dirname, "context");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["lang"] = path.join(__dirname, "lang");
    config.resolve.alias["hooks"] = path.join(__dirname, "hooks");
    config.resolve.alias["themes"] = path.join(__dirname, "themes");
    config.resolve.alias["sounds"] = path.join(__dirname, "sounds");

    return config;
  },
});
