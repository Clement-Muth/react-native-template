import { FC } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "..";

const MoreIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 24 24" fill="white" width={30} height={30} {...props}>
    <Path d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6-10C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
  </Svg>
);

export default MoreIcon;
