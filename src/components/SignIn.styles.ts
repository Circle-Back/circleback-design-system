import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import facebook from "./shared/svgs/facebook.svg";
import google from "./shared/svgs/google.svg";
import EmailSvg from "./shared/svgs/email.svg";

export interface BaseButtonProps {
  borderColor: string;
}

const TextGridItem = styled(Grid)`
  text-align: start;
`;

const EmailIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${EmailSvg});
`;

const FacebookIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${facebook});
  background-repeat: no-repeat;
  background-position: center;
`;

const GoogleIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${google});
  background-size: cover;
`;

const BaseButton = styled(Button)<BaseButtonProps>`
  border: 1px solid ${({ borderColor }): string => borderColor};
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

export {
  BaseButton,
  TextGridItem,
  EmailIcon,
  GoogleIcon,
  FacebookIcon,
  TypographySignIn,
};
