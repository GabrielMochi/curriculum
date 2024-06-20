import type { Options as MarkdownOptions } from "react-markdown";
import type { TextProps } from "../Text/Text.interface";

export type MarkdownTextProps = TextProps & Pick<MarkdownOptions, "children">;
