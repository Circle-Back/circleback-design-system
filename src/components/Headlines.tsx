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
  title: string;
  linkName: string;
  cards: Record<string, any>;
}

export const Headlines: React.FC<HeadlineProps> = ({
  title,
  linkName,
  cards,
}: HeadlineProps) => {
  const theme = useTheme();
  return (
    <StylesProvider injectFirst>
      <Box height="207px">
        <PaperStyled padding={theme.spacing(1)}>
          <Grid spacing={2} container direction="column">
            <Grid item>
              <Grid justify="space-between" container>
                <Title color="primary">{title}</Title>
                <Icon color="rgba(0, 0, 0, 0.6)" icon="share" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid spacing={1} justify="center" container>
                {cards.data.map((card: any) => (
                  <React.Fragment key={card.title}>
                    <Grid item>
                      <HeadlineCard>
                        <HeadlineCardImage image={card.image} />
                        <HeadlineCardTitle>{card.title}</HeadlineCardTitle>
                        <HeadlineCardSubtitle>
                          {card.subtitle}
                        </HeadlineCardSubtitle>
                      </HeadlineCard>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="flex-end">
                <HeadlineCardLink>{linkName}</HeadlineCardLink>
              </Grid>
            </Grid>
          </Grid>
        </PaperStyled>
      </Box>
    </StylesProvider>
  );
};
