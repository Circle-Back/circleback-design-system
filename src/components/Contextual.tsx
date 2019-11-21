import * as React from "react";
import Grid from "@material-ui/core/Grid";
import {
  BackgroundImage,
  Title,
  Overlay,
  ContextualContainer,
  Name,
  StyledGrid,
  Body,
} from "./Contextual.styles";

export interface ContextualProps {
  name: string;
  title: string;
  body: string;
  image: string;
}

export const Contextual: React.FC<ContextualProps> = ({
  name,
  title,
  body,
  image,
}: ContextualProps) => (
  <ContextualContainer>
    <StyledGrid container direction="column" spacing={1}>
      <Grid item>
        <Name>{name}</Name>
      </Grid>
      <Grid item>
        <Title>{title}</Title>
      </Grid>
      <Grid item>
        <Body>{body}</Body>
      </Grid>
    </StyledGrid>
    <BackgroundImage image={image} />
    <Overlay />
  </ContextualContainer>
);
