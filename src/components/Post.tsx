import React from "react";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  PostHeaderTitle,
  Responses,
  Views,
  PostHeader,
  UserAvatar,
} from "./Post.styles";
import { Icon } from "./Icon";

const ReplyIcon: React.FC = () => {
  const theme = useTheme();
  return (
    <Icon
      width="19px"
      height="16px"
      viewBox="0 0 17 14"
      color={theme.palette.primary.main}
      fillOpacity="0.74"
      icon="reply"
    />
  );
};

const VisibilityIcon: React.FC = () => {
  const theme = useTheme();
  return (
    <Icon
      viewBox="0 0 24 24"
      color={theme.palette.primary.main}
      icon="visibility"
    />
  );
};

export const Post: React.FC = () => (
  <StylesProvider injectFirst>
    <Card>
      <PostHeader
        avatar={<UserAvatar aria-label="avatar">R</UserAvatar>}
        title={(
          <PostHeaderTitle color="primary" variant="h6">
            Post Title
          </PostHeaderTitle>
        )}
        subheader="Category"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat…
        </Typography>
        <Box mt={2}>
          <Grid justify="space-between" container>
            <Grid item>
              <Responses variant="outlined">
                <Grid container>
                  <Grid item xs={6}>
                    <ReplyIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="button" color="textPrimary">
                      <Box fontWeight="fontWeightBold">10</Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Responses>
            </Grid>
            <Grid item>
              <Views variant="outlined">
                <Grid container>
                  <Grid item xs={6}>
                    <VisibilityIcon />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="button" color="textPrimary">
                      100
                    </Typography>
                  </Grid>
                </Grid>
              </Views>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  </StylesProvider>
);
