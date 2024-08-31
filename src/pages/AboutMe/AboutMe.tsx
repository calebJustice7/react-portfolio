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
      "Built a 3D modeling tool that incorporated LiDar technology with orthographic imagery to accurately predict solar output of a residential or commercial property with 96% accuracy. This project with a tight deadline enabled SunRebel to be a competitor in the market, and take some market share while the solar industry was taking a hit. This alone made us compliant with many financiers which led directly to revenue.",
    description:
      "I worked on integrations with financiers where security mattered, I also worked on other integrations with providers like DocuSign, SignRequest, Google, etc. Helped devlop and plan new features for customers, while also balancing internal tech upgrades to meet demands and improve developer experience",
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
      "Utilized GeoJSON technologies to build an interactive map of the United States for which large healthcare providers could visualize their patient population. This was useful as they could filter down, or switch to a heat map mode, to view which area(s) / demographics they were and weren’t effectively reaching. This enabled them (with other features in our web app) to build full marketing campaigns and reach the audience they intend, which overall helps create a healthier population.",
    description:
      "I worked directly with the CTO and customers to maintain the project. I added new features, managed and rebuilt the infrastructure, and maintained customer requests and integrations. I was the only member developing the project and balancing that with customer meetings was a challenge.",
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
    jobName: "Ionrev",
    title: "Full-stack developer",
    highlight:
      "Attended meetings big names people involved in tech, communicating technical terms to business requirements and vice-versa",
    description:
      "Worked with a team of other developers to maintain a multitude of projects, constantly switching tasks while also maintaining a public NPM package with useful tools for other developers to use",
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
        pl: { md: 12, xs: 8 },
        pt: 4,
        pr: { md: 4, xs: 2.5 },
        overflow: "auto",
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
            <Grid item xs={12} md={5} key={index}>
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
                  <span style={{ fontWeight: "700" }}>Title:</span>
                  <span style={{ fontWeight: "200" }}> {job.title}</span>
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "700" }}>Highlight:</span>
                  <span style={{ fontWeight: "200" }}> {job.highlight}</span>
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "700" }}>Description:</span>
                  <span style={{ fontWeight: "200" }}> {job.description}</span>
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {job.techUsed.map((tech, idx) => (
                      <Box sx={{ mt: 1 }} key={String(index) + String(idx)}>
                        <Chip
                          sx={{
                            mt: 1,
                            backgroundColor: theme.palette.primary.main,
                          }}
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
