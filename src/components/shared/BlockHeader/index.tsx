import { styled, Typography } from "@mui/material";
import theme from "../../../theme";

const BlockHeader = styled(Typography)`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.palette.text.secondary};
`;

export default BlockHeader;
