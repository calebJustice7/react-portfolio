import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  CardActions,
  Button,
} from "@mui/material";
import { projects } from "../../constants/projects";

interface ProjectProps {
  project: (typeof projects)[number];
}
function Project({ project }: ProjectProps) {
  return (
    <Card sx={{ maxWidth: 400, mb: 3 }} raised>
      <CardHeader title={project.title} />
      <CardMedia
        component="img"
        height="194"
        image={project.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <CardActions sx={{ m: 0, px: 0, mt: 1 }}>
          {project.liveURL && (
            <Button
              href={project.liveURL}
              size="small"
              variant="contained"
              color="primary"
            >
              Live URL
            </Button>
          )}
          <Button href={project.githubURL} size="small" variant="contained">
            Github
          </Button>
        </CardActions>
        <Box flexWrap="wrap" display="flex">
          <Typography sx={{ mt: 1, width: "fit-content" }} variant="body2">
            Technologys:
          </Typography>

          {project.technology.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              sx={{ mt: 1, mx: 1 }}
              color="default"
              size="small"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Project;
