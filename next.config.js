const path = require("path");
const withAssetsImport = require("next-assets-import");
module.exports = withAssetsImport({
  env: {
    BACKEND_API_URL: "http://192.168.43.180:1337",
    APP_URL: "http://192.168.43.180:3000",
  },
  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["context"] = path.join(__dirname, "context");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["lang"] = path.join(__dirname, "lang");
    config.resolve.alias["themes"] = path.join(__dirname, "themes");
    config.resolve.alias["sounds"] = path.join(__dirname, "sounds");

    return config;
  },
});
