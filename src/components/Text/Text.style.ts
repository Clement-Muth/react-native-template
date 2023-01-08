import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { _ComponentProps } from "types";

export const textStyle = (colors: Theme["colors"], color: string) =>
  StyleSheet.create({
    style: {
      fontWeight: "600",
      color: color || colors.text
    }
  }).style;
