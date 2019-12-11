import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export interface PaperStyledProps {
  padding?: string | number | undefined;
}

export const PaperStyled = styled(Paper)<PaperStyledProps>`
  padding: ${({ padding }): string | number => `${padding}px` || 0};
`;

export const ProfileTitle = styled(Typography)`
  font-weight: 700;
`;
