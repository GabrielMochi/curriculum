import { isLastItemInArray } from "../../utils";
import { TextStructure } from "./abstract/TextStructure.abstract";

export class BulletPoints extends TextStructure<string[]> {
  /**
   * @returns {string}
   * @example content: ['foo', 'bar'], output: '- foo\n- bar'
   */
  toMarkdown(): string {
    const emptyMarkdownValue = "";

    return this.content.reduce(
      (markdown, bulletPoint, currentIndex, selfArray) =>
        `${markdown}- ${bulletPoint}${isLastItemInArray(currentIndex, selfArray) ? "" : "\n"}`,
      emptyMarkdownValue,
    );
  }
}
