import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export interface InputStyledProps {
  id: string;
  label: string;
  placeholder: string;
  margin: string;
  variant: string;
  bordercolor: string;
  InputLabelProps: object;
}

export const InputStyled = styled(TextField as React.FC<InputStyledProps>)`
  label {
    color: ${({ bordercolor }): string => bordercolor};
  }
  fieldset {
    border-color: ${({ bordercolor }): string => bordercolor};
  }
`;
