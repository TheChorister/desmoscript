<<<<<<< HEAD
import { CompilationUnit, Scope } from "./ast/ast.js";
=======
import { CompilationUnit, Scope } from "./ast/ast";
>>>>>>> desmoscript

export let placeholder = 0;

export function getLinesAndCols(str: string): [number, number][] {
  const linesAndCols: [number, number][] = [];
  let line = 1;
  let col = 1;
  for (const char of str) {
    linesAndCols.push([line, col]);
    if (char == "\n") {
      line++;
      col = 1;
    } else {
      col++;
    }
  }
  return linesAndCols;
}
<<<<<<< HEAD
export { lex } from "./parse/lex.js";
export { parse } from "./parse/parse.js";
export { typecheckScopeTree } from "./scope-tree/typecheck/typecheck.js";
export { compileDesmoscript } from "./combined-functionality/full-compiler.js";
export { compileDesmoscriptForLanguageSupport } from "./combined-functionality/language-support-compiler.js";
export { enableDebug } from "./debug/debug.js";
export { formatError } from "./scope-tree/typecheck/type-errors.js";
// export { IOInterface } from "./io/io.js";
=======

export { lex } from "./parse/lex";
export { parse } from "./parse/parse";
export { typecheckScopeTree } from "./scope-tree/typecheck/typecheck";
export { compileDesmoscript } from "./combined-functionality/full-compiler";
export { compileDesmoscriptForLanguageSupport } from "./combined-functionality/language-support-compiler";
export { enableDebug } from "./debug/debug";
export { formatError } from "./scope-tree/typecheck/type-errors";
export { IOInterface } from "./io/io";
>>>>>>> desmoscript

export type DesmoCallback = (ctx: { scope: Scope }) => void;
export declare function desmo(callback: DesmoCallback): void;
