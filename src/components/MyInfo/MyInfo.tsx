import {
  Avatar,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import headshot from "../../assets/Portrait_small.jpg";
import { useTrail, a } from "@react-spring/web";
import CustomButton from "../CustomButton";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Span = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function MyInfo() {
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2000, friction: 1000 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
    delay: 1900,
  });
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      sx={{ pt: 12 }}
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} lg={6}>
        <Avatar
          alt="Remy Sharp"
          src={headshot}
          sx={{
            width: lg ? 400 : 250,
            height: lg ? 400 : 250,
            marginLeft: lg ? "auto" : "default",
            mr: lg ? 20 : "default",
            margin: lg ? "default" : "auto",
            boxShadow: "8px 6px 13px 1px rgba(42,156,213,1)",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{ marginTop: lg ? 0 : 5, textAlign: lg ? "default" : "center" }}
      >
        {trail.map(({ ...style }, index) => (
          <a.div key={index} style={style}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 600, marginLeft: "-5px" }}
            >
              <TypeAnimation
                sequence={[
                  "Hello",
                  2000,
                  "Bonjour",
                  2000,
                  "Namaste",
                  2000,
                  "Olà",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </Typography>
            <Typography sx={{ width: lg ? "80%" : "100%", mt: 1 }}>
              I'm <Span> Caleb Justice, </Span> a
              <Span> Full-Stack Developer </Span>
              with over 4 years of experience. I strive to produce clean,
              reusable, and maintainable code, while also meeting the needs of
              the end user.
            </Typography>
            <Link to="/resume">
              <CustomButton sx={{ mt: 3 }}>Resume</CustomButton>
            </Link>
            <Link to="/about-me">
              <CustomButton
                sx={{
                  mt: 3,
                  ml: 2,
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                About Me
              </CustomButton>
            </Link>
          </a.div>
        ))}
      </Grid>
    </Grid>
  );
}

export default MyInfo;
