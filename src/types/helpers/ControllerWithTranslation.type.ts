import type { TFunction } from "i18next";
import type { EmptyProps } from "./EmptyProps.type";

export type ControllerWithTranslation<T extends {} = EmptyProps> = T & {
  t: TFunction;
};
