import type { ReactElement } from "react";
import { Box, Grid2 } from "@mui/material";
import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import Main from "../../components/organisms/Main";

const SidebarGrid = (): ReactElement => (
  <Grid2 size={{ xs: 12, md: 4 }} maxWidth={{ md: "384px" }}>
    <Sidebar />
  </Grid2>
);

const MainGrid = (): ReactElement => (
  <Grid2 size={{ xs: 12, md: "grow" }}>
    <Main />
  </Grid2>
);

const IndexPageView = (): ReactElement => (
  <Box display="flex" flexDirection="column" flex="1">
    <Header />
    <Grid2 container flex="1">
      <SidebarGrid />
      <MainGrid />
    </Grid2>
  </Box>
);

export default IndexPageView;
