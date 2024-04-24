import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import "../../components/Trail/styles.module.css";
import Trail from "../../components/Trail";
import { projects } from "../../constants/projects";
import Project from "../../components/Project";

function Projects() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      sx={{
        width: "100%",
        pl: 10,
        py: 4,
        pr: 4,
        overflow: "scroll",
        position: "relative",
      }}
    >
      <Trail customClass="trailsText" delay={200} open={true}>
        <span>Projects</span>
      </Trail>

      <Trail customClass="" delay={300} open={true}>
        <Typography variant="h5" sx={{ mt: 7, mb: 1 }}>
          Showcase of my portfolio projects
        </Typography>

        <Box
          sx={{ mt: 7, mx: sm ? 1 : 5 }}
          display="flex"
          alignItems="flex-start"
          justifyContent={!md ? "space-between" : "center"}
          flexWrap="wrap"
        >
          {projects.map((project, idx) => (
            <Project project={project} key={idx} />
          ))}
        </Box>
      </Trail>
    </Paper>
  );
}

export default Projects;
