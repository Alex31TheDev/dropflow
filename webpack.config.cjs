const path = require("path");

module.exports = {
    mode: "production",
    entry: "./dist/src/api-parse.js",
    target: "webworker",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.cjs",
        library: {
            type: "commonjs",
            export: "default"
        }
    },
    resolve: {
        extensions: [".js"]
    }
};
