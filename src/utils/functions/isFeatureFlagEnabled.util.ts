import { FeatureFlags } from "../constants/featureFlags.const";

export const isFeatureFlagEnable = (featureFlagKey: keyof typeof FeatureFlags): boolean =>
  FeatureFlags[featureFlagKey];
