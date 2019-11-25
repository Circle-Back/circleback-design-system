import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import {
  BackgroundImage,
  Title,
  Overlay,
  ContextualContainer,
  Name,
  StyledGrid,
  Body,
  ContextualButton,
} from "./Contextual.styles";
import theme from "../MuiTheme";

export interface ContextualProps {
  name: string;
  title: string;
  body: string;
  image: string;
  button?: boolean | undefined;
}

export const Contextual: React.FC<ContextualProps> = ({
  name,
  title,
  body,
  image,
  button,
}: ContextualProps) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
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
        {button ? (
          <ContextualButton backgroundcolor={theme.palette.primary.main}>
            Start a topic
          </ContextualButton>
        ) : null}
      </ContextualContainer>
    </ThemeProvider>
  </StylesProvider>
);
