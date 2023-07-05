import { CompilationUnit, Scope } from "./ast/ast";

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

export { lex } from "./parse/lex";
export { parse } from "./parse/parse";
export { typecheckScopeTree } from "./scope-tree/typecheck/typecheck";
export { compileDesmoscript } from "./combined-functionality/full-compiler";
export { compileDesmoscriptForLanguageSupport } from "./combined-functionality/language-support-compiler";
export { enableDebug } from "./debug/debug";
export { formatError } from "./scope-tree/typecheck/type-errors";
export { IOInterface } from "./io/io";

export type DesmoCallback = (ctx: { scope: Scope }) => void;
export declare function desmo(callback: DesmoCallback): void;
