import React from "react";
import styled from "styled-components";
import { icons } from "./shared/icons";

interface MyType {
  [key: string]: string;
}

interface IconProps {
  icon: string;
  block?: boolean;
  color: string;
  fillOpacity?: string | undefined;
  viewBox?: string;
  width?: string;
  height?: string;
}

interface PathProps {
  [index: string]: number | string | undefined;
  fillOpacity?: string | undefined;
}

const Svg = styled.svg<{ block?: boolean }>`
  display: ${({ block }): string => (block ? "block" : "inline-block")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path<PathProps>`
  fill-opacity: ${({ fillOpacity }): string | undefined => fillOpacity};
  fill: currentColor;
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it.
 *    We must ensure that it is ignored by screen readers,
 *    by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information.
 *    For example, an icon as only child in a button.
 *    The meaning can be obvious visually, but it must have a proper text alternative via
 *    `aria-label` for screen readers (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */

export const Icon: React.FC<IconProps> = ({
  icon,
  block,
  color,
  fillOpacity,
  viewBox,
  width,
  height,
}: IconProps) => {
  const viewBoxProp = viewBox || "0 0 24 24";
  const widthProp = width || "24px";
  const heightProp = height || "24px";
  return (
    <Svg
      viewBox={viewBoxProp}
      width={widthProp}
      height={heightProp}
      block={block}
    >
      <Path color={color} fillOpacity={fillOpacity} d={icons[icon]} />
    </Svg>
  );
};
