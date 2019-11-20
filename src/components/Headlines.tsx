import * as React from "react";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Title,
  PaperStyled,
  HeadlineCard,
  HeadlineCardTitle,
  HeadlineCardImage,
  HeadlineCardSubtitle,
  HeadlineCardLink,
  PostTitle,
  PostCategory,
  PostTimeAgo,
  PostDivider,
} from "./Headlines.styles";
import { Icon } from "./Icon";

export interface HeadlineProps {
  title: string;
  linkName: string;
  children: React.ReactNode;
}

export interface Item {
  title: string;
  subtitle: string;
  image: string;
}

export interface PostItem {
  title: string;
  category: string;
}

export interface CardsProps {
  cards: Record<string, any>;
}

export interface PostsProps {
  posts: Record<string, any>;
}

export const Posts: React.FC<PostsProps> = ({ posts }) => posts.data.map((post: PostItem) => (
  <>
    <Grid container alignItems="center">
      <Grid item>
        <PostTitle>{post.title}</PostTitle>
      </Grid>
      <Grid item>
        <PostCategory>{post.category}</PostCategory>
      </Grid>
      <Grid item>
        <PostTimeAgo>2 min ago</PostTimeAgo>
      </Grid>
    </Grid>
    <PostDivider variant="middle" />
  </>
));

export const Cards: React.FC<CardsProps> = ({ cards }) => cards.data.map((item: Item) => (
  <React.Fragment key={item.title}>
    <Grid item>
      <HeadlineCard>
        <HeadlineCardImage image={item.image} />
        <HeadlineCardTitle>{item.title}</HeadlineCardTitle>
        <HeadlineCardSubtitle>{item.subtitle}</HeadlineCardSubtitle>
      </HeadlineCard>
    </Grid>
  </React.Fragment>
));

export const Headlines: React.FC<HeadlineProps> = ({
  title,
  linkName,
  children,
}: HeadlineProps) => {
  const theme = useTheme();
  return (
    <StylesProvider injectFirst>
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
              {children}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="flex-end">
              <HeadlineCardLink>{linkName}</HeadlineCardLink>
            </Grid>
          </Grid>
        </Grid>
      </PaperStyled>
    </StylesProvider>
  );
};
