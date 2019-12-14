import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const BaseFooter = styled.div`
  padding: 40px;
  background-color: #6200ee;
`;

export const FooterTitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 24px;
`;

export const FooterElement = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 24px;
`;

export const Divider = styled.div`
  width: 251px;
  height: 1px;
  background-color: #ffffff;
  opacity: 0.12;
`;
