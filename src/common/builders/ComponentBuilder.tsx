import type { FC, ReactElement } from "react";
import type { EmptyProps } from "../../types";

type ComponentBuilderProps<P extends {} = EmptyProps, CR extends {} = EmptyProps> = {
  props?: P;
  controller?: ((props?: P) => CR) | (() => CR);
  view: FC<P & CR>;
};

export default function ComponentBuilder<P extends {} = EmptyProps, CR extends {} = EmptyProps>({
  props = {} as P,
  controller: useController = () => ({} as CR),
  view: View,
}: ComponentBuilderProps<P, CR>): ReactElement {
  return <View {...{ ...props, ...useController(props) }} />;
}
