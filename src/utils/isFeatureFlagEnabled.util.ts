import { FEATURE_FLAGS } from "../constants";

export const isFeatureFlagEnable = (featureFlagKey: keyof typeof FEATURE_FLAGS): boolean =>
  FEATURE_FLAGS[featureFlagKey];
