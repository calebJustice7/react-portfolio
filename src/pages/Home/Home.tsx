import {
  Box,
  LinearProgress,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Trail from "../../components/Trail";
import { useEffect, useState } from "react";
import Divider from "../../components/Divider";

import MyInfo from "../../components/MyInfo";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "Javascript",
  "Typescript",
  "Java",
  "React",
  "Angular",
  "Vue",
  "Express",
  "MongoDB",
  "SQL",
  "Azure",
  "AWS",
  "Terraform",
  "Docker",
  "Linux",
];

function Home() {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const routeTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <Paper sx={{ width: "100%", pl: 10, py: 4, pr: 4 }}>
      {loading && (
        <LinearProgress
          sx={{ width: "80%", margin: "0 auto" }}
          color="secondary"
        />
      )}
      {!loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <Trail customClass="trailsText" delay={200} open={true}>
              <span>Caleb Justice</span>
            </Trail>
            <Trail customClass="secondText" delay={600} open={true}>
              <span>Software Engineer</span>
            </Trail>
            <Divider color={theme.palette.primary.main} />
          </Box>
          <Trail delay={1000} customClass="" open={true}>
            <Box sx={{ alignSelf: "center", mt: -15 }}>
              <MyInfo />
            </Box>
          </Trail>
          <Box sx={{ width: "90%", margin: "0 auto" }}>
            <Typography sx={{ fontWeight: "600", mb: 1 }}>
              {/* Main technologies used */}
            </Typography>
            <Divider color={theme.palette.primary.main} />
            <Box
              sx={{
                my: 1.5,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {skills.map((skill, index) => (
                <span style={{ margin: "0 5px" }} key={index}>
                  {skill}
                </span>
              ))}
            </Box>

            {/* <Divider color={theme.palette.primary.main} /> */}
          </Box>
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ position: "absolute", top: 20, right: 40 }}
      >
        <img
          onClick={() => routeTo("https://github.com/calebJustice7")}
          style={{
            cursor: "pointer",
            width: "40px",
            height: "40px",
            filter: "invert(100)",
            margin: "20px 0 20px 0",
          }}
          src={github}
        />
        <img
          onClick={() =>
            routeTo("https://www.linkedin.com/in/caleb-justice-93b863191/")
          }
          style={{ width: "40px", cursor: "pointer", height: "40px" }}
          src={linkedin}
        />
      </Box>
    </Paper>
  );
}

export default Home;
