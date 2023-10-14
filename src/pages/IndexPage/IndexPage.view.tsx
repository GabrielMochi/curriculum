import type { ReactElement } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import type { IndexControllerReturn } from "./IndexPage.interface";
import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";

const IndexPageView = ({ content: { header, sidebar } }: IndexControllerReturn): ReactElement => (
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

export default IndexPageView;
