import { Paper } from "@mui/material";
import resume from "../../assets/resume.png";

function Resume() {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={resume}
        style={{
          objectFit: "cover",
          height: "90vh",
        }}
      />
      ;
    </Paper>
  );
}

export default Resume;
