import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export interface BackgroundImageProps {
  image: string;
}

export const StyledGrid = styled(Grid)`
  position: absolute;
  z-index: 1;
`;

export const ContextualContainer = styled.div`
  position: relative;
  width: 344px;
  height: 100px;
`;
export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 344px;
  height: 100px;
  border-radius: 4px;
  background-image: url(${({ image }): string => image});
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px rgba(0, 0, 0, 0.14);
  background: rgba(0, 0, 0, 0.6);
`;

export const Name = styled.div`
  margin-left: 16px;
  margin-top: 11px;
  width: 63px;
  height: 16px;
  color: rgba(255, 255, 255, 0.87);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.5px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const Title = styled.div`
  margin-left: 16px;
  width: 88px;
  height: 24px;
  color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 24px;
`;

export const Body = styled.div`
  margin-left: 16px;
  width: 190px;
  height: 20px;
  color: rgba(255, 255, 255, 0.87);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 20px;
`;
