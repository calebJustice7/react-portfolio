import {
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Trail from "../../components/Trail";

const workExperience = [
  {
    jobName: "Sunrebel",
    title: "Software Developer",
    techUsed: [
      "React",
      "Typescript",
      "NodeJS",
      "MongoDB",
      "AWS",
      "S3",
      "Linux",
      "Threejs",
      "MUI",
    ],
  },
  {
    jobName: "Upfront Healthcare",
    title: "Software Engineer",
    techUsed: [
      "Vue",
      "NodeJS",
      "MongoDB",
      "CSS",
      "AWS",
      "Azure",
      "Terraform",
      "Linux",
    ],
  },
  {
    jobName: "Patientbond",
    title: "Full-stack developer",
    techUsed: ["HTML", "CSS", "Javascript", "Bootstrap", "MongoDB", "AWS"],
  },
  {
    jobName: "Ionrev",
    title: "Full-stack developer",
    techUsed: ["Vue", "FeathersJS", "MongoDB"],
  },
  {
    jobName: "Velvet",
    title: "Web Development Intern",
    techUsed: ["Bubble.io", "HTML", "CSS", "Javascript"],
  },
];

function AboutMe() {
  const theme = useTheme();

  return (
    <Paper sx={{ width: "100%", pl: 12, pt: 4, pr: 4 }}>
      <Trail customClass="trailsText" delay={200} open={true}>
        <span>About me</span>
      </Trail>

      <Trail customClass="" delay={300} open={true}>
        <Typography variant="h5" sx={{ mt: 7, mb: 1 }}>
          Professional Experience
        </Typography>
        <Grid container gap={2}>
          {workExperience.map((job, index) => (
            <Grid item xs={10} md={5} key={index}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "6px",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  p: 1,
                  pl: 2,
                  mt: 1,
                }}
              >
                <Box>
                  <Typography variant="h6">{job.jobName}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: "6px",
                  p: 1,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  pl: 2,
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Typography sx={{ fontWeight: "800" }}>Title:</Typography>
                  <Typography sx={{ fontWeight: "300" }}>
                    {job.title}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {job.techUsed.map((tech, idx) => (
                      <Box sx={{ mt: 1 }} key={String(index) + String(idx)}>
                        <Chip
                          sx={{ mt: 1 }}
                          label={tech}
                          color="default"
                          size="small"
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Trail>
    </Paper>
  );
}

export default AboutMe;
