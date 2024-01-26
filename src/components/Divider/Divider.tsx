import { Box } from "@mui/material";

interface DividerProps {
  color?: string;
}

function Divider({ color }: DividerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "1px",
        backgroundColor: color || "#ffffff60",
      }}
    ></Box>
  );
}

export default Divider;
