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
    highlight:
      "Developed a user-friendly interface enabling 3D modeling of residential structures, incorporating LiDAR technology to accurately estimate shading and sunlight production.",
    description:
      "Worked on integrations with financiers, and other large providers like DocuSign, SignRequest, Google, etc. Helped devlop and plan new features for customers, while also balancing internal tech upgrades to meet compliance and improve developer experience",
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
    highlight:
      "Constructed a customizable website interface, empowering customers to personalize their websites. Engineered a system to generate raw code and securely store it in a custom storage solution. Implemented a dynamic NodeJS web server for optimal performance and security, seamlessly delivering content from storage to users' browsers",
    description:
      "I worked directly with the CTO and customers to maintain the project. I added new features, managed and rebuilt the infrastructure, and maintained customer requests and integrations.",
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
    description:
      "I worked directly with the CTO to understand and develop features. Being a start-up I was responsible for the feature design, working with big data to try and create optimal performant solutions",
    highlight:
      "Developed a dynamic mapping system allowing customers to submit patient lists. Aggregated and formatted data for viewing millions of records simultaneously on a map, with customizable filters for various criteria. Implemented within a multi-tenant environment to ensure seamless and efficient data visualization.",

    techUsed: ["HTML", "CSS", "Javascript", "Bootstrap", "MongoDB", "AWS"],
  },
  {
    jobName: "Ionrev",
    title: "Full-stack developer",
    highlight:
      "Attended meetings with large people involved in tech, communicating technical terms to business requirements and vice-versa",
    description:
      "Worked with a team of other developers to maintain a multitude of projects, constantly switching tasks while also maintaining a public NPM package with useful helpers for other developers to use",
    techUsed: ["Vue", "FeathersJS", "MongoDB"],
  },
  {
    jobName: "Velvet",
    highlight: "Early stage startup, first paid employee.",
    description:
      "Worked with the CEO and CTO directly to build out the inital application prototype.",
    title: "Web Development Intern",
    techUsed: ["Bubble.io", "HTML", "CSS", "Javascript"],
  },
];

function AboutMe() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        width: "100%",
        pl: 12,
        pt: 4,
        pr: 4,
        overflow: "scroll",
        pb: 4,
      }}
    >
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
                <Typography>
                  <span style={{ fontWeight: "800" }}>Title:</span>
                  <span style={{ fontWeight: "100" }}> {job.title}</span>
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "800" }}>Highlight:</span>
                  <span style={{ fontWeight: "100" }}> {job.highlight}</span>
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "800" }}>Description:</span>
                  <span style={{ fontWeight: "100" }}> {job.description}</span>
                </Typography>

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
