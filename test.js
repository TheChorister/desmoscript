const { compileDesmoscript, formatError, compileDesmoscriptForLanguageSupport } = require("./dist/bundle.js");
const fs = require("fs/promises");
const path = require("path");

function compileError(compileOutput, e) {
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
}

function compileErrors (compileOutput) {
    return (compileOutput.errors || [])
            .map((e) => compileError(compileOutput, e))
            .join(`\n\x1b[38;5;195m${"".padStart(80, "_")}\x1b[0m\n\n`);
}
/*
compileDesmoscript("./sample.desmo", {
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
    if (compileOutput.type == "success") {
        console.log("Success!");
        fs.writeFile("out.json", JSON.stringify(compileOutput.state));
    } else {
        console.log(compileErrors(compileOutput));
        console.log("Failure!");
    }
}).catch(e => {
    console.log(e);
    console.log("Failure!");
})
*/

const ls = compileDesmoscriptForLanguageSupport(
    {
        watchFile: () => (() => {}),
        writeFile: (str, data) => fs.writeFile(str, data),
        readFile: async (str) => {
            const fileBuffer = await fs.readFile(str);
            return fileBuffer.toString();
        },
        resolvePath: path.resolve,
        dirname: path.dirname,
        relativePath: path.relative,
});

ls.formatFile("./sample.desmo", (...args) => console.log(args)).then(console.log)

module.exports = ls;