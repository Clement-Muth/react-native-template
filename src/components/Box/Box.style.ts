import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { _ComponentProps } from "types";

export const boxStyle = (colors: Theme["colors"]) =>
  StyleSheet.create({
    style: {
      color: colors.text
    }
  }).style;
