import type { ReactElement } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import type { DefaultTemplateProps } from "./DefaultTemplate.interface";
import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";

const DefaultTemplateView = ({ header, sidebar }: DefaultTemplateProps): ReactElement => (
  <Box display="flex" flexDirection="column" flex="1">
    <Header {...header} />
    <Grid container flex="1">
      <Grid xs={3}>
        <Sidebar {...sidebar} />
      </Grid>
      <Grid xs />
    </Grid>
  </Box>
);

export default DefaultTemplateView;
