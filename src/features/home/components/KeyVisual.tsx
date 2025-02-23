import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import FlipCard from "./FlipCard";

const KeyVisualSection = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const IntroductionSection = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const KeyVisual: React.FC = () => {
  const theme = useTheme();

  return (
    <KeyVisualSection>
      <IntroductionSection>
        <Typography
          color="primary"
          sx={{
            width: "90%",
            fontSize: "80px",
            lineHeight: "90px",
            letterSpacing: "-1px",
            fontFamily: "Montserrat",
            fontWeight: 900,
            textAlign: "center",
            background:
              "linear-gradient(151deg, #F4F4F3 1.35%, rgba(244, 244, 243, 0.00) 220.28%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            "@media (max-width:767px)": {
              fontSize: "40px",
              lineHeight: "40px",
            },
          }}
        >
          Record and Review <br />
          your learning
        </Typography>
        <Typography
          color="primary"
          variant="h6"
          sx={{
            width: "60%",
            fontSize: "22.5px",
            lineHeight: "35px",
            margin: "60px 0px",
            fontWeight: 400,
            textAlign: "center",
            letterSpacing: "0.5px",
            color: "rgba(200, 200, 200,.6)",
            "@media (max-width:767px)": {
              width: "80%",
              fontSize: "14px",
              lineHeight: "20px",
              margin: "30px 0px",
            },
          }}
        >
          "Introducing Re-Re, an application meticulously crafted to aid you in
          recording and reviewing your study notes."
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{
            color: `${theme.palette.secondary.main}`,
            fontWeight: 700,
            boxShadow: "none",
            border: "none",
            transition: "all 0.1s ease",
            whiteSpace: "nowrap",
            // fontSize: isSmallScreenW500 ? "10px" : "small",
            margin: "0px 0px 30px",
          }}
          color="primary"
          //   onClick={handleTryOnWebsite}
        >
          Try on Website
        </Button>
      </IntroductionSection>
      <FlipCard />
    </KeyVisualSection>
  );
};

export default KeyVisual;
