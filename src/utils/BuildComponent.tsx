import type { FC, ReactElement } from "react";

type BuildComponentProps<P extends {} = {}, CR extends {} = {}> = {
  props?: P;
  controller?: (props?: P) => CR;
  view: FC<P & CR>;
};

export default function BuildComponent<P extends {}, CR extends {}>({
  props = {} as P,
  controller: useController = () => ({} as CR),
  view: View,
}: BuildComponentProps<P, CR>): ReactElement {
  return <View {...{ ...props, ...useController(props) }} />;
}
