import { defaultProps } from "libraries/rebass";
import { removeEmpty } from "utils/removeEmpty";
import { View, ViewProps, ViewStyle } from "react-native";
import { boxStyle } from "./Box.style";
import { useTheme } from "@react-navigation/native";
import React, { type FC } from "react";
import type { RebassBase, _ComponentProps } from "types";

const Box: FC<RebassBase<ViewStyle>> = ({ ...props }) => {
  const { colors } = useTheme();

  return (
    // @ts-ignore
    <View style={{ ...boxStyle(colors), ...removeEmpty(defaultProps<ViewProps>(props)) }}>{props.children}</View>
  );
};

export default Box;
