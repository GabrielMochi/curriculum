import { TextStructure } from "./abstract/TextStructure.abstract";

export class Paragraph extends TextStructure<string> {
  toMarkdown(): string {
    return this.content.toString();
  }
}
