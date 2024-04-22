import { MarkdownSupport } from "../interfaces/MarkdownSupport.interface";
import { TextStructure } from "./abstract/TextStructure.abstract";

export class TextStructureStack implements MarkdownSupport {
  public static readonly DEFAULT_LINE_BREAKER = "\n\n";

  public stack: TextStructure<unknown>[];

  public lineBreak: string;

  constructor(...stack: TextStructure<unknown>[]) {
    this.stack = stack;
    this.lineBreak = TextStructureStack.DEFAULT_LINE_BREAKER;
  }

  setLineBreak(lineBreak: string): this {
    this.lineBreak = lineBreak;
    return this;
  }

  toMarkdown(): string {
    return this.stack.map((textStructure) => textStructure.toMarkdown()).join(this.lineBreak);
  }
}
