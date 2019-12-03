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
  fullWidth?: boolean;
  color?: string | undefined;
  multiline?: boolean | undefined;
  rows?: string | undefined;
}

export const InputStyled = styled(TextField as React.FC<InputStyledProps>)`
  textarea {
    color: ${({ color }): string | undefined => color};
  }
  input {
    color: ${({ color }): string | undefined => color};
  }
  label {
    color: ${({ bordercolor }): string => bordercolor};
  }
  fieldset {
    border-color: ${({ bordercolor }): string => bordercolor};
  }
`;
