import {
  Accessibility,
  AccountCircle,
  AccountTree,
  ImportantDevices,
} from "@mui/icons-material";
import { Box, Button, Drawer, Tooltip, Typography } from "@mui/material";
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
        <Tooltip title="Summary" placement="right-start">
          <Button onClick={() => routeTo("/")} sx={{ my: 0.5 }}>
            <Accessibility />
          </Button>
        </Tooltip>
        <Divider />
        <Tooltip title="About me" placement="right-start">
          <Button onClick={() => routeTo("/#/about-me")} sx={{ my: 0.5 }}>
            <AccountCircle />
          </Button>
        </Tooltip>
        <Divider />
        <Tooltip title="Projects" placement="right-start">
          <Button onClick={() => routeTo("/#/projects")} sx={{ my: 0.5 }}>
            <ImportantDevices />
          </Button>
        </Tooltip>
        <Divider />
        <Tooltip title="Resume" placement="right-start">
          <Button onClick={() => routeTo("/#/resume")} sx={{ my: 0.5 }}>
            <AccountTree />
          </Button>
        </Tooltip>
        <Divider />
      </Box>
      <Box></Box>
    </Drawer>
  );
}

export default Sidebar;
