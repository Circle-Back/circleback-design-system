import * as React from "react";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  Title,
  PaperStyled,
  HeadlineCard,
  HeadlineCardTitle,
  HeadlineCardImage,
  HeadlineCardSubtitle,
  HeadlineCardLink,
} from "./Headlines.styles";
import { Icon } from "./Icon";

export interface HeadlineProps {
  children: React.ReactNode;
}

export const Headlines: React.FC<HeadlineProps> = ({
  children,
}: HeadlineProps) => {
  const theme = useTheme();
  return (
    <StylesProvider injectFirst>
      <Box width="344px" height="207px">
        <PaperStyled padding={theme.spacing(1)}>
          <Grid spacing={2} container direction="column">
            <Grid item>
              <Grid justify="space-between" container>
                <Title color="primary">{children}</Title>
                <Icon color="rgba(0, 0, 0, 0.6)" icon="share" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid spacing={1} justify="center" container>
                <Grid item>
                  <HeadlineCard>
                    <HeadlineCardImage />
                    <HeadlineCardTitle>Tablets</HeadlineCardTitle>
                    <HeadlineCardSubtitle>Subtitle</HeadlineCardSubtitle>
                  </HeadlineCard>
                </Grid>
                <Grid item>
                  <HeadlineCard>
                    <HeadlineCardImage />
                    <HeadlineCardTitle>Tablets</HeadlineCardTitle>
                    <HeadlineCardSubtitle>Subtitle</HeadlineCardSubtitle>
                  </HeadlineCard>
                </Grid>
                <Grid item>
                  <HeadlineCard>
                    <HeadlineCardImage />
                    <HeadlineCardTitle>Tablets</HeadlineCardTitle>
                    <HeadlineCardSubtitle>Subtitle</HeadlineCardSubtitle>
                  </HeadlineCard>
                </Grid>
                <Grid item>
                  <HeadlineCard>
                    <HeadlineCardImage />
                    <HeadlineCardTitle>Tablets</HeadlineCardTitle>
                    <HeadlineCardSubtitle>Subtitle</HeadlineCardSubtitle>
                  </HeadlineCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="flex-end">
                <HeadlineCardLink>See all categories</HeadlineCardLink>
              </Grid>
            </Grid>
          </Grid>
        </PaperStyled>
      </Box>
    </StylesProvider>
  );
};
