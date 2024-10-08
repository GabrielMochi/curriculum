import type { ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import Main from "../../components/organisms/Main";

const SidebarGrid = (): ReactElement => (
  <Grid item xs={12} md={4} maxWidth={{ md: "384px" }}>
    <Sidebar />
  </Grid>
);

const MainGrid = (): ReactElement => (
  <Grid item xs={12} md>
    <Main />
  </Grid>
);

const IndexPageView = (): ReactElement => (
  <Box display="flex" flexDirection="column" flex="1">
    <Header />
    <Grid container flex="1">
      <SidebarGrid />
      <MainGrid />
    </Grid>
  </Box>
);

export default IndexPageView;
