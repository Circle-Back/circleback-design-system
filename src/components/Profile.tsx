import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import { PaperStyled, ProfileTitle } from "./Profile.styles";

export const Profile: React.FC = () => {
  const theme = useTheme();

  return (
    <StylesProvider injectFirst>
      <PaperStyled padding={theme.spacing(2)}>
        <Grid container xs={12} direction="column">
          <Grid item>
            <ProfileTitle color="primary" variant="h6">
              Profile Info
            </ProfileTitle>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="country"
              label="country"
              defaultValue="Madagascar"
              margin="normal"
            />
            <TextField
              fullWidth
              id="short-bio"
              label="short bio"
              defaultValue="I animate, draw and code"
              margin="normal"
            />
            <TextField
              fullWidth
              id="email"
              label="email"
              defaultValue="foo@bar.com"
              margin="normal"
            />
          </Grid>
        </Grid>
      </PaperStyled>
    </StylesProvider>
  );
};
