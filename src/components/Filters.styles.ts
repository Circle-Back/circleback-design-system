import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";

interface FiltersLabelProps {
  textcolor?: string | undefined;
}

interface InputBaseStyledProps {
  textcolor?: string | undefined;
}

export const FiltersLabel = styled(Typography)<FiltersLabelProps>`
  margin-top: 12px;
  margin-left: 24px;
  font-family: "Roboto Medium";
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 24px;
  color: ${({ textcolor }): string | undefined => textcolor};
`;

export const FiltersWrapper = styled.div`
  background-color: ${({ color }): string | undefined => color};
  height: 86px;
`;

export const FormControlStyled = styled(FormControl)`
  box-shadow: 0 4px 4px -3px rgba(0, 0, 0, 0.2),
    0 3px 12px 2px rgba(0, 0, 0, 0.12), 0 7px 9px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  height: 38px;
  margin-left: 24px;
  min-width: 120px;
  background-color: white;
`;

export const InputBaseStyled = styled(InputBase)<InputBaseStyledProps>`
  color: ${({ textcolor }): string | undefined => textcolor};
  height: 38px;
  border-radius: 4px;
  background-color: white;
  font-size: 12px;
  .MuiSelect-icon {
    margin-right: 4px;
  }
  .MuiInputBase-input {
    padding: 10px 0 10px 13px;
  }
  .MuiSelect-select:focus {
    background-color: white;
    border-radius: 4px;
    border-color: #80bdff;
    boxshadow: "0 0 0 0.2rem rgba(0,123,255,.25)";
  }
  input {
    margin-top: 24px;
    border-radius: 4px;
    position: relative;
    border: 1px solid #ced4da;
    font-size: 16px;
    padding: 10px 26px 10px 12px;
  }
  "&:focus": {
  }
`;
