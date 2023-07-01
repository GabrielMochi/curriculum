import type { ReactElement } from "react";
import type { DefaultTemplateProps } from "./index";
import Header from "../../organisms/Header";

const DefaultTemplateView = ({ header }: DefaultTemplateProps): ReactElement => (
  <>
    <Header {...header} />
  </>
);

export default DefaultTemplateView;
