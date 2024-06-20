import type { SxProps, Theme } from "@mui/material";

export const mergeSxProps = (...sxPropsList: (SxProps | SxProps<Theme> | undefined)[]): SxProps =>
  sxPropsList.reduce((sxPropsAcc: SxProps, sxProps): SxProps => {
    if (sxProps) return { ...sxPropsAcc, ...sxProps } as SxProps;
    return { ...sxPropsAcc };
  }, {} as SxProps);
