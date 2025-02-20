import { ParserRuleContext, Token } from "antlr4ts";
import { ActionExprContext, AddOrSubExprContext, ArrayDJsonContext, AssignmentStatementContext, BlockExprContext, BooleanDJsonContext, DerivativeExprContext, DesmoscriptDJsonContext, DjsonExpressionContext, ExpressionContext, FunctionCallContext, FunctionCallExprContext, FunctionDefinitionStatementContext, IdentifierContext, IdentifierExprContext, ImportStatementContext, ListCompExprContext, ListExprContext, ListMemberAccessExprContext, LogicalExprContext, MacroCallContext, MacroCallExprContext, MatchExprContext, MemberAccessExprContext, MultOrDivExprContext, NamedJsonStatementContext, NamespaceDefinitionStatementContext, NullDJsonContext, NumberDJsonContext, NumberExprContext, ObjectDJsonContext, ParentheticalExprContext, PointExprContext, RangeExprContext, StatementListContext, StepRangeExprContext, StringDJsonContext, StringStatementContext, SumProdIntegralExprContext } from "../grammar/DesmoscriptParser.js";
import { DesmoscriptVisitor } from "../grammar/DesmoscriptVisitor.js";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor.js";
import { ast } from "./ast.mjs";
export declare function uniqueAnonScopeName(): string;
export declare const makeExprId: () => number;
export declare class DesmoscriptASTBuilder extends AbstractParseTreeVisitor<ast.Node> implements DesmoscriptVisitor<ast.Node> {
    filename: string;
    constructor(filename: string);
    withLineCol<T extends ast.Node>(ctx: ParserRuleContext, node: Omit<T, keyof ast.Context>): T;
    defaultResult(): ast.Root;
    aggregateResult(aggregate: ast.Node, nextResult: ast.Node): ast.Node<"", "">;
    parseBinop(ctx: ParserRuleContext & {
        _left: ExpressionContext;
        _right: ExpressionContext;
        _op: Token;
    }): ast.Node;
    visitAddOrSubExpr(ctx: AddOrSubExprContext): ast.Node;
    visitMultOrDivExpr(ctx: MultOrDivExprContext): ast.Node;
    visitLogicalExpr(ctx: LogicalExprContext): ast.Node;
    visitAssignmentStatement(ctx: AssignmentStatementContext): ast.Node;
    visitActionExpr(ctx: ActionExprContext): ast.Node;
    visitRangeExpr(ctx: RangeExprContext): ast.Node;
    visitListMemberAccessExpr(ctx: ListMemberAccessExprContext): ast.Node;
    visitMemberAccessExpr(ctx: MemberAccessExprContext): ast.Node;
    visitStepRangeExpr(ctx: StepRangeExprContext): ast.Node;
    visitParentheticalExpr(ctx: ParentheticalExprContext): ast.Node<"", "">;
    visitNumberExpr(ctx: NumberExprContext): ast.Node;
    visitPointExpr(ctx: PointExprContext): ast.Node;
    visitIdentifierExpr(ctx: IdentifierExprContext): ast.Node;
    visitIdentifier(ctx: IdentifierContext): ast.Node;
    visitListExpr(ctx: ListExprContext): ast.Node;
    visitListCompExpr(ctx: ListCompExprContext): ast.Node;
    visitSumProdIntegralExpr(ctx: SumProdIntegralExprContext): ast.Node;
    visitDerivativeExpr(ctx: DerivativeExprContext): ast.Node;
    visitFunctionCallExpr(ctx: FunctionCallExprContext): ast.Node;
    visitFunctionCall(ctx: FunctionCallContext): ast.Node;
    visitMacroCallExpr(ctx: MacroCallExprContext): ast.Node;
    visitMacroCall(ctx: MacroCallContext): ast.Node;
    visitFunctionDefinitionExpr(ctx: FunctionDefinitionStatementContext): ast.Node;
    visitNamespaceDefinitionExpr(ctx: NamespaceDefinitionStatementContext): ast.Node;
    visitBlockExpr(ctx: BlockExprContext): ast.Node;
    visitMatchExpr(ctx: MatchExprContext): ast.Node;
    visitImportExpr(ctx: ImportStatementContext): ast.Node;
    visitJSONExpr(ctx: DjsonExpressionContext): ast.Node;
    visitNullDJson(ctx: NullDJsonContext): ast.Node;
    visitNumberDJson(ctx: NumberDJsonContext): ast.Node;
    visitStringDJson(ctx: StringDJsonContext): ast.Node;
    visitBooleanDJson(ctx: BooleanDJsonContext): ast.Node;
    visitObjectDJson(ctx: ObjectDJsonContext): ast.Node;
    visitArrayDJson(ctx: ArrayDJsonContext): ast.Node;
    visitDesmoscriptDJson(ctx: DesmoscriptDJsonContext): ast.Node;
    visitNamedJsonStatement(ctx: NamedJsonStatementContext): ast.Node;
    visitStringStatement(ctx: StringStatementContext): ast.Node;
    visitStatementList(ctx: StatementListContext): ast.Node;
}
export declare function desmoscriptFileToAST(filename: string): Promise<ast.Root<"", "">>;
export declare function desmoscriptStringToAST(src: string, filename: string): ast.Node<"", "">;
