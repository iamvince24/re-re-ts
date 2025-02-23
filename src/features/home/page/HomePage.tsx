import { Box } from "@mui/material";
import styled from "@emotion/styled";
import DefaultLayout from "../../../components/layouts/DefaultLayout";
import ExplainProductSection from "../components/ExplainProductSection";
import KeyVisualSection from "../components/KeyVisual";

const MainSection = styled(Box)`
  padding: 100px 0px 50px;
  @media (max-width: 767px) {
    padding: 50px 0px 50px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <MainSection>
        <KeyVisualSection />
        <ExplainProductSection />
      </MainSection>
    </DefaultLayout>
  );
};

export default HomePage;
