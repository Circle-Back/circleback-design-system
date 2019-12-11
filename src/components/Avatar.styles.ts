import styled from "styled-components";
import MaterialUIAvatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

interface BaseButtonProps {
  textcolor?: string | undefined;
  backgroundcolor?: string | undefined;
  bordercolor?: string | undefined;
}

export const AvatarStyled = styled(MaterialUIAvatar)<BaseButtonProps>`
  width: 83px;
  height: 83px;
  border: 3px solid #985eff;
  background-color: ${({ backgroundcolor }): string => backgroundcolor || deepOrange[500]};
  color: ${({ textcolor }): string => textcolor || "white"};
`;
