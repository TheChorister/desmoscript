const { compileDesmoscript, formatError } = require("./dist/bundle.js");
const fs = require("fs/promises");
const path = require("path");

compileDesmoscript("/home/runner/desmoscript/sample.desmo", {
    unsavedFiles: new Map(),
    io: {
        watchFile: () => (() => {}),
        writeFile: (str, data) => fs.writeFile(str, data),
        readFile: async (str) => {
            const fileBuffer = await fs.readFile(str);
            return fileBuffer.toString();
        },
        resolvePath: path.resolve,
        dirname: path.dirname,
        relativePath: path.relative,
    },
    watchFiles: new Set(),
    options: { },
}).then(compileOutput => {
                 
    /*console.log(
        compileOutput.errors
            .map((e) => {
                return formatError(
                    {
                        entry: "./",
                        sourceCode: compileOutput.sourceCode,
                        maxWidth: 60,
                        format: (str, opts) => {
                            if (opts.type == "error") {
                                return str
                                    .split("\n")
                                    .map((substr) => `\x1b[1;31m${substr}\x1b[0m`)
                                    .join("\n");
                            }
                            if (opts.type == "gutter") {
                                return `\x1b[38;5;236m${str}\x1b[0m`;
                            }
                            if (opts.type == "deemphasize") {
                                return `\x1b[38;5;236m${str}\x1b[0m`;
                            }
                            if (opts.type == "message") {
                                return `\x1b[38;5;220m${str}\x1b[0m`;
                            }
                            return str;
                        },
                    },
                    e
                );
            })
            .join(`\n\x1b[38;5;195m${"".padStart(80, "_")}\x1b[0m\n\n`)
    );*/
    
    if (compileOutput.type == "success") {
        console.log("Success!");
        fs.writeFile("out.json", JSON.stringify(compileOutput.state));
    } else {
        console.log("Failure!");
    }
});