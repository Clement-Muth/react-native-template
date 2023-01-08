import { defaultProps } from "libraries/rebass";
import { removeEmpty } from "utils/removeEmpty";
import { Text as TextC, TextProps, TextStyle } from "react-native";
import { textStyle } from "./Text.style";
import { useTheme } from "@react-navigation/native";
import React, { type FC } from "react";
import type { RebassBase, _ComponentProps } from "types";

const Text: FC<RebassBase<TextStyle>> = ({ color, ...props }) => {
  const { colors } = useTheme();

  return (
    // @ts-ignore
    <TextC style={{ ...textStyle(colors, color), ...removeEmpty(defaultProps<TextProps>(props)) }}>
      {props.children}
    </TextC>
  );
};

export default Text;
