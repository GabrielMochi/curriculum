import type { ReactElement } from "react";
import type { MarkdownTextProps } from "./MarkdownText.interface";
import ComponentBuilder from "../../../common/builders/ComponentBuilder";
import MarkdownTextView from "./MarkdownText.view";

const MarkdownText = (props: MarkdownTextProps): ReactElement => (
  <ComponentBuilder props={props} view={MarkdownTextView} />
);

export default MarkdownText;
