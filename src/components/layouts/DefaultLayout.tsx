import { Box } from "@mui/material";
import styled from "@emotion/styled";
import noiseImage from "@/assets/img/noise_white.png";

const DefaultLayout = styled(Box)`
  width: 100%;
  height: 100%;

  background-color: var(--secondary-color);
  background-image: url(${noiseImage});
`;

export default DefaultLayout;
