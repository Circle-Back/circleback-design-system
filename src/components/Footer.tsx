import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { StylesProvider } from "@material-ui/core/styles";
import {
  BaseFooter,
  FooterTitle,
  FooterElement,
  Divider,
} from "./Footer.styles";

export const Footer: React.FC = () => (
  <StylesProvider injectFirst>
    <BaseFooter>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <FooterTitle>Categories</FooterTitle>
            </Grid>
            <Grid item>
              <Grid container spacing={6}>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <FooterElement>Electronics</FooterElement>
                    </Grid>
                    <Grid item>
                      <FooterElement>Tablets</FooterElement>
                    </Grid>
                    <Grid item>
                      <FooterElement>Displays</FooterElement>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <FooterElement>Games</FooterElement>
                    </Grid>
                    <Grid item>
                      <FooterElement>Hardware</FooterElement>
                    </Grid>
                    <Grid item>
                      <FooterElement>Software</FooterElement>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Grid container spacing={5}>
                <Grid item>
                  <FooterTitle>Company</FooterTitle>
                </Grid>
                <Grid item>
                  <FooterTitle>Other Links</FooterTitle>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={10}>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <FooterElement>About</FooterElement>
                    </Grid>
                    <Grid item>
                      <FooterElement>Jobs</FooterElement>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <FooterElement>Help</FooterElement>
                    </Grid>
                    <Grid item>
                      <FooterElement>F.A.Q.</FooterElement>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BaseFooter>
  </StylesProvider>
);
