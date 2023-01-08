import { FC } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { buttonStyle } from "./Button.style";
import { RebassBase, _ComponentProps } from "types";
import { defaultProps } from "libraries/rebass";
import { removeEmpty } from "utils/removeEmpty";

const Button: FC<RebassBase<TouchableOpacityProps> & { color?: string }> = ({ color, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      // @ts-ignore Don't know why...
      style={{ ...buttonStyle, ...removeEmpty(defaultProps<TouchableOpacityProps>(props)) }}
    >
      <Text style={{ color: color || "white", fontWeight: "700" }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
