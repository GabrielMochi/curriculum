import type { ReactElement } from "react";
import Markdown from "react-markdown";
import type { MarkdownTextProps } from "./MarkdownText.interface";
import Text from "../Text";
import globalCss from "../../../theme/globalCss";
import { mergeSxProps } from "../../../utils/mergeSxProps.util";

const MarkdownTextView = ({ children, sx, ...props }: MarkdownTextProps): ReactElement => (
  <Text component="div" sx={mergeSxProps(globalCss.defaultMarkdownStyles, sx)} {...props}>
    <Markdown>{children}</Markdown>
  </Text>
);

export default MarkdownTextView;
