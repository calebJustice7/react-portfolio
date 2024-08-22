import { SxProps, styled } from "@mui/material";

const CustButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  border: "none",
  borderRadius: "5px",
  padding: theme.spacing(4),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: "1em",
  fontWeight: "300",
  cursor: "pointer",
  transition: "0.3s all",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

function CustomButton({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return <CustButton sx={sx}>{children}</CustButton>;
}

export default CustomButton;
