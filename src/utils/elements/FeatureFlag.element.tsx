import type { PropsWithChildren, ReactElement } from "react";
import type { FeatureFlags } from "../constants/featureFlags.const";
import { isFeatureFlagEnable } from "../functions/isFeatureFlagEnabled.util";

type FeatureFlagProps = {
  featureFlagKey: keyof typeof FeatureFlags;
};

export const FeatureFlag = ({
  featureFlagKey,
  children,
}: PropsWithChildren<FeatureFlagProps>): ReactElement => {
  if (!isFeatureFlagEnable(featureFlagKey)) return <></>;
  return <>{children}</>;
};
