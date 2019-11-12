import styled from "styled-components";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";

interface PathProps {
  [index: string]: number | string | undefined;
  fillOpacity?: string | undefined;
}

export const UserAvatar = styled(Avatar)`
  background-color: ${red[500]};
`;

export const PostHeader = styled(CardHeader)`
  padding-bottom: 0px;
`;
export const CardActions = styled(Grid)`
  margin-left: 30px;
`;

export const Responses = styled(Button)`
  padding: 5px 4px;
  span {
    height: 16px;
  }
  width: 75px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Views = styled(Button)`
  padding: 5px 4px;
  span {
    height: 16px;
  }
  width: 75px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Svg = styled.svg<{ block?: boolean }>`
  display: ${({ block }): string => (block ? "block" : "inline-block")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

export const Path = styled.path<PathProps>`
  fill-opacity: ${({ fillOpacity }): string | undefined => fillOpacity};
  fill: currentColor;
`;

export const PostHeaderTitle = styled(Typography)`
  font-weight: 700;
`;
