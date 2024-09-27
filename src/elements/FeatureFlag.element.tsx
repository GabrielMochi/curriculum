import type { PropsWithChildren, ReactElement } from "react";
import { isFeatureFlagEnable } from "../utils";
import { FEATURE_FLAGS } from "../constants";

type FeatureFlagProps = {
  featureFlagKey: keyof typeof FEATURE_FLAGS;
};

export const FeatureFlag = ({
  featureFlagKey,
  children,
}: PropsWithChildren<FeatureFlagProps>): ReactElement => {
  if (!isFeatureFlagEnable(featureFlagKey)) return <></>;
  return <>{children}</>;
};
