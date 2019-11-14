import styled from "styled-components";
import Button from "@material-ui/core/Button";

interface BaseButtonProps {
  textcolor?: string | undefined;
  backgroundcolor?: string | undefined;
}

export const BaseButton = styled(Button)<BaseButtonProps>`
  background-color: ${({ backgroundcolor }): string => backgroundcolor || "white"};
  color: ${({ textcolor }): string => textcolor || "white"};
  border-radius: 4px;
  width: 112px;
  height: 36px;
`;
