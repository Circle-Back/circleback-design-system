import styled from "styled-components";
import Button from "@material-ui/core/Button";

interface BaseButtonProps {
  textcolor?: string | undefined;
  backgroundcolor?: string | undefined;
  bordercolor?: string | undefined;
}

export const BaseButton = styled(Button)<BaseButtonProps>`
  border: 1px solid ${({ bordercolor }): string => bordercolor || "none"};
  border-radius: 4px;
  background-color: ${({ backgroundcolor }): string => backgroundcolor || "white"};
  color: ${({ textcolor }): string => textcolor || "white"};
  width: 112px;
  height: 36px;
`;
