import { ReactNode } from "react";
import { FlexStyle, ViewStyle } from "react-native";

export type _ComponentProps = ViewStyle & {
  margin?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  padding?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  px?: number;
  py?: number;
  bg?: string;
};

export type RebassBase<T = FlexStyle> = T & _ComponentProps & { children?: ReactNode };
