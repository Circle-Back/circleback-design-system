import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export interface PaperStyledProps {
  padding?: string | number | undefined;
}

export const HeadlineCard = styled(Paper)`
  width: 76px;
  height: 115px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.04);
`;

export const PaperStyled = styled(Paper)<PaperStyledProps>`
  padding: ${({ padding }): string | number => `${padding}px` || 0};
`;

export const Title = styled(Typography)`
  height: 26px;
  font-family: Roboto;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.16px;
  line-height: 24px;
`;

export const HeadlineCardTitle = styled(Typography)`
  margin-left: 3px;
  height: 24px;
  color: rgba(0, 0, 0, 0.74);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 24px;
`;

export const HeadlineCardSubtitle = styled(Typography)`
  margin-left: 3px;
  height: 12px;
  color: rgba(0, 0, 0, 0.74);
  font-family: Roboto;
  font-size: 9px;
  font-weight: 400;
`;

export const HeadlineCardImage = styled.div`
  margin: auto;
  width: 70px;
  height: 70px;
  background-image: url("./tabletHeadlineCard.png");
  background-position: center;
  background-size: cover;
`;

export const HeadlineCardLink = styled(Typography)`
  height: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;
