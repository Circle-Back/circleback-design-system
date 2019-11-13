import {
  Palette,
  PaletteOptions,
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    tertiary: string;
  }
  interface Palette {
    tertiary: string;
  }
}
