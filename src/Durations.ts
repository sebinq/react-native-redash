import Animated from "react-native-reanimated";

const { multiply } = Animated;

export const seconds = (s: Animated.Adaptable<number>) => multiply(s, 1000);
export const minutes = (m: Animated.Adaptable<number>) =>
  seconds(multiply(m, 60));
export const hours = (m: Animated.Adaptable<number>) =>
  minutes(multiply(m, 60));
