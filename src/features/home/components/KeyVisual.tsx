import { Box, Button, Typography } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import FlipCard from "./FlipCard";

const KeyVisual: React.FC = () => {
  const theme = useTheme();

  return (
    <KeyVisualSection>
      <IntroductionSection>
        <MainTitle color="primary">
          Record and Review <br />
          your learning
        </MainTitle>
        <SubTitle color="primary" variant="h6">
          "Introducing Re-Re, an application meticulously crafted to aid you in
          recording and reviewing your study notes."
        </SubTitle>
        <StyledButton
          theme={theme}
          size="small"
          variant="contained"
          color="primary"
          //   onClick={handleTryOnWebsite}
        >
          Try on Website
        </StyledButton>
      </IntroductionSection>
      <FlipCard />
    </KeyVisualSection>
  );
};

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

const MainTitle = styled(Typography)`
  width: 90%;
  font-size: 80px;
  line-height: 90px;
  letter-spacing: -1px;
  font-family: Montserrat;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(
    151deg,
    #f4f4f3 1.35%,
    rgba(244, 244, 243, 0) 220.28%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 767px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

const SubTitle = styled(Typography)`
  width: 60%;
  font-size: 22.5px;
  line-height: 35px;
  margin: 60px 0px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5px;
  color: rgba(200, 200, 200, 0.6);

  @media (max-width: 767px) {
    width: 80%;
    font-size: 14px;
    line-height: 20px;
    margin: 30px 0px;
  }
`;

const StyledButton = styled(Button)<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  font-weight: 700;
  box-shadow: none;
  border: none;
  transition: all 0.1s ease;
  white-space: nowrap;
  margin: 0px 0px 30px;
`;

export default KeyVisual;
