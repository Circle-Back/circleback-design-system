import * as React from "react";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ifElse, prop } from "ramda";
import {
  Title,
  PaperStyled,
  HeadlineCard,
  HeadlineCardTitle,
  HeadlineCardImage,
  HeadlineCardSubtitle,
  HeadlineCardLink,
  PostTitle,
  PostSubtitle,
  PostCategory,
  PostTimeAgo,
  PostDivider,
  HeadlineCategoryImage,
} from "./Headlines.styles";
import { Icon } from "./Icon";

export interface HeadlineProps {
  title: string;
  linkName: string;
  children: React.ReactNode;
  image?: string | undefined;
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
  image,
}: HeadlineProps) => {
  const theme = useTheme();
  const HeaderCategory: React.FC = () => (
    <Grid item>
      <Grid container alignItems="center">
        <Grid
          container
          item
          xs={11}
          sm={6}
          alignItems="flex-start"
          justify="flex-start"
        >
          <Grid item xs={2} sm={2} md={1}>
            <HeadlineCategoryImage image={image} />
          </Grid>
          <Grid item xs={10} sm={10} md={11}>
            <Title color="primary">{title}</Title>
            <PostSubtitle>Body 2</PostSubtitle>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" item xs={1} sm={6}>
          <Icon color="rgba(0, 0, 0, 0.6)" icon="share" />
        </Grid>
      </Grid>
    </Grid>
  );

  const Header: React.FC = () => (
    <Grid item>
      <Grid justify="space-between" container>
        <Title color="primary">{title}</Title>
        <Icon color="rgba(0, 0, 0, 0.6)" icon="share" />
      </Grid>
    </Grid>
  );

  const HeadlineHeader = ifElse(prop("image"), HeaderCategory, Header);

  return (
    <StylesProvider injectFirst>
      <PaperStyled padding={theme.spacing(1)}>
        <Grid spacing={2} container direction="column">
          <HeadlineHeader image={image} />
          <Grid item>
            <Grid spacing={1} justify="center" container>
              {children}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="flex-end">
              <HeadlineCardLink color="primary">{linkName}</HeadlineCardLink>
            </Grid>
          </Grid>
        </Grid>
      </PaperStyled>
    </StylesProvider>
  );
};
