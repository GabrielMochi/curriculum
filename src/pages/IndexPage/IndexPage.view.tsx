import type { ReactElement } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import Main from "../../components/organisms/Main";

const IndexPageView = (): ReactElement => (
  <Box display="flex" flexDirection="column" flex="1">
    <Header />
    <Grid container flex="1">
      <Grid xs={3} maxWidth="384px">
        <Sidebar />
      </Grid>
      <Grid xs>
        <Main />
      </Grid>
    </Grid>
  </Box>
);

export default IndexPageView;
