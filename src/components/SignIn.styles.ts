import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export interface BaseButtonProps {
  bordercolor: string;
}

const TextGridItem = styled(Grid)`
  text-align: start;
`;

const BaseButton = styled(Button)<BaseButtonProps>`
  border: 1px solid ${({ bordercolor }): string => bordercolor};
  justify-content: right;
  height: 46px;
  width: 272px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  text-transform: none;
`;

const TypographySignIn = styled(Typography)`
  color: #6200ee;
  font-size: 34px;
  font-weight: 900;
  line-height: 36px;
  text-align: center;
  margin-top: 216px;
`;

export { BaseButton, TextGridItem, TypographySignIn };
