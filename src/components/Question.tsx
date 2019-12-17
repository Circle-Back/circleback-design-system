import * as React from "react";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Input } from "./Input";
import { Button } from "./Button";
import { BasePaper, Title } from "./Question.styles";

export const Question: React.FC = () => {
  const theme = useTheme();
  return (
    <StylesProvider injectFirst>
      <BasePaper>
        <Grid container direction="column">
          <Grid item>
            <Box ml={4}>
              <Title color="primary">Compose a Message</Title>
            </Box>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Grid item xs={11}>
                <Input
                  label="title"
                  placeholder="Title here..."
                  borderColor={theme.palette.primary.main}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Grid item xs={11}>
                <Input
                  multiline
                  rows="8"
                  label="content"
                  placeholder="Content here..."
                  borderColor={theme.palette.primary.main}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Grid item>
                <Box mr={2}>
                  <Button>Send</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BasePaper>
    </StylesProvider>
  );
};
