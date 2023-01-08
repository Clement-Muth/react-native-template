import { StyleProp, ViewStyle } from "react-native";
import { RebassBase } from "types";

export const defaultProps = <T>(props: RebassBase<T>): StyleProp<ViewStyle> => ({
  ...props,
  backgroundColor: props.bg,
  margin: props?.m || props.margin,
  marginBottom: props?.mb,
  marginHorizontal: props?.mx,
  marginLeft: props?.ml,
  marginRight: props?.mr,
  marginTop: props?.mt,
  marginVertical: props?.my,
  padding: props.p || props.padding,
  paddingBottom: props?.pb,
  paddingHorizontal: props?.px,
  paddingLeft: props?.pl,
  paddingRight: props?.pr,
  paddingTop: props?.pt,
  paddingVertical: props?.py
});
