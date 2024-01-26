import { Accessibility, AccountCircle, AccountTree } from "@mui/icons-material";
import { Box, Button, Drawer, Typography } from "@mui/material";
import Divider from "../Divider";

function Sidebar() {
  // const theme = useTheme();

  const routeTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <Drawer
      PaperProps={{ sx: { p: 2, px: 0 } }}
      sx={{
        width: "fit-content",
        padding: "0 10px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "fit-content",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
      variant="permanent"
      open={true}
    >
      <Typography>CJ</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Divider />
        <Button
          onClick={() => routeTo("/")}
          sx={{
            my: 0.5,
            // backgroundColor:
            //   window.location.pathname === "/"
            //     ? theme.palette.primary.main
            //     : "",
          }}
        >
          <Accessibility />
        </Button>
        <Divider />
        <Button
          onClick={() => routeTo("/#/about-me")}
          sx={{
            my: 0.5,
            // backgroundColor:
            //   window.location.pathname === "/#/about-me"
            //     ? theme.palette.primary.main
            //     : "",
          }}
        >
          <AccountCircle />
        </Button>
        <Divider />
        <Button
          onClick={() => routeTo("/#/resume")}
          sx={{
            my: 0.5,
            // backgroundColor:
            //   window.location.pathname === "/#/resume"
            //     ? theme.palette.primary.main
            //     : "",
          }}
        >
          <AccountTree />
        </Button>
        <Divider />
      </Box>
      <Box></Box>
    </Drawer>
  );
}

export default Sidebar;
