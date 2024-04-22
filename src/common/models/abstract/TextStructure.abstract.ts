import type { MarkdownSupport } from "../../interfaces/MarkdownSupport.interface";

export abstract class TextStructure<T> implements MarkdownSupport {
  public readonly content: T;

  constructor(content: T) {
    this.content = content;
  }

  abstract toMarkdown(): string;
}
