import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import { colors } from '@/theme';

/** Grounding abstract shape: stacked, settled forms (individual healing). */
export function GroundingShape({ size = 96 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Ellipse cx="50" cy="84" rx="40" ry="10" fill={colors.indigo} opacity={0.9} />
      <Ellipse cx="50" cy="66" rx="28" ry="11" fill={colors.terracotta} />
      <Ellipse cx="50" cy="49" rx="18" ry="9" fill={colors.marigold} />
      <Circle cx="50" cy="28" r="10" fill={colors.magenta} opacity={0.85} />
    </Svg>
  );
}

/** Connecting, warm abstract shape: overlapping forms (couples & families). */
export function ConnectingShape({ size = 96 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Circle cx="38" cy="50" r="26" fill={colors.terracotta} opacity={0.9} />
      <Circle cx="62" cy="50" r="26" fill={colors.marigold} opacity={0.85} />
      <Path
        d="M50 64 C 40 56, 38 46, 45 42 C 48 40, 50 42, 50 44 C 50 42, 52 40, 55 42 C 62 46, 60 56, 50 64 Z"
        fill={colors.magenta}
      />
    </Svg>
  );
}
