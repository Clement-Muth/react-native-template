import { FC } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "..";

const StateIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 24 24" fill="white" width={30} height={30} {...props}>
    <Path d="M6.5 21H3c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm7.25-18h-3.5c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3.5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM21 11h-3.5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z" />
  </Svg>
);

export default StateIcon;
