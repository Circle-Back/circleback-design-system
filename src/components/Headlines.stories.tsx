import * as React from "react";
import { Headlines, Cards, Posts } from "./Headlines";

export default {
  title: "Headlines",
};

const cardsCategories = {
  data: [
    {
      title: "Tablets",
      subtitle: "Subtitle",
      image: "./tablets.png",
    },
    {
      title: "Electronics",
      subtitle: "Subtitle",
      image: "./electronics.png",
    },
    {
      title: "Displays",
      subtitle: "Subtitle",
      image: "./displays.png",
    },
    {
      title: "Games",
      subtitle: "Subtitle",
      image: "./games.png",
    },
  ],
};

const cardsNews = {
  data: [
    {
      title: "Mobile",
      subtitle: "Subtitle",
      image: "./mobile.png",
    },
    {
      title: "New Mac",
      subtitle: "Subtitle",
      image: "./mac.png",
    },
    {
      title: "New Game",
      subtitle: "Subtitle",
      image: "./game.png",
    },
    {
      title: "Playstation",
      subtitle: "Subtitle",
      image: "./playstation.png",
    },
  ],
};

const cardsPosts = {
  data: [
    {
      title: "Lorem ipsum dolor sit amet…",
      category: "Category",
    },
    {
      title: "Lorem ipsum dolor sit amet…",
      category: "Category",
    },
    {
      title: "Lorem ipsum dolor sit amet…",
      category: "Category",
    },
  ],
};

export const Categories: React.FC = () => (
  <Headlines title="Top categories" linkName="See all categories">
    <Cards cards={cardsCategories} />
  </Headlines>
);

export const News: React.FC = () => (
  <Headlines title="News" linkName="See all news">
    <Cards cards={cardsNews} />
  </Headlines>
);

export const LastPosts: React.FC = () => (
  <Headlines title="Latest Posts" linkName="See all posts">
    <Posts posts={cardsPosts} />
  </Headlines>
);

export const Category: React.FC = () => (
  <Headlines
    title="Electronics"
    linkName="See all posts"
    image="./electronicsCategory.png"
  >
    <Posts posts={cardsPosts} />
  </Headlines>
);
