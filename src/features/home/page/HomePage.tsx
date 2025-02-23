import { Box } from "@mui/material";
import styled from "styled-components";
import KeyVisual from "../components/KeyVisual";
import DefaultLayout from "../../../components/layouts/DefaultLayout";

const MainSection = styled(Box)`
  width: 100%;
  padding: 100px 0px 50px;
  @media (max-width: 767px) {
    padding: 50px 0px 50px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <MainSection>
        <KeyVisual />
      </MainSection>
    </DefaultLayout>
  );
};

export default HomePage;
