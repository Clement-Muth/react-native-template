import { FC } from "react";
import { TouchableOpacityProps, View, ViewProps } from "react-native";
import { RebassBase, _ComponentProps } from "types";
import { defaultProps } from "libraries/rebass";
import { removeEmpty } from "utils/removeEmpty";
import { flexStyle } from "./Flex.style";

const Flex: FC<RebassBase<ViewProps>> = ({ ...props }) => {
  return (
    <View
      {...props}
      // @ts-ignore Don't know why...
      style={{ ...flexStyle, ...removeEmpty(defaultProps<TouchableOpacityProps>(props)) }}
    >
      {props.children}
    </View>
  );
};

export default Flex;
