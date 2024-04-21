import type { FC, ReactElement } from "react";
import type { EmptyProps } from "../types";

type BuildComponentProps<P extends {} = EmptyProps, CR extends {} = EmptyProps> = {
  props?: P;
  controller?: ((props?: P) => CR) | (() => CR);
  view: FC<P & CR>;
};

export default function BuildComponent<P extends {} = EmptyProps, CR extends {} = EmptyProps>({
  props = {} as P,
  controller: useController = () => ({} as CR),
  view: View,
}: BuildComponentProps<P, CR>): ReactElement {
  return <View {...{ ...props, ...useController(props) }} />;
}
