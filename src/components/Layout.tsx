import { forwardRef, type ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { colors, fonts, MAX_WIDTH, useBreakpoint } from '@/theme';
import { Footer } from './Footer';

/** Scrollable page body with the site footer appended. */
export const Page = forwardRef<ScrollView, { children: ReactNode }>(function Page({ children }, ref) {
  return (
    <ScrollView ref={ref} style={styles.page} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flexGrow: 1 }}>{children}</View>
      <Footer />
    </ScrollView>
  );
});

/** Full-bleed band with centered, max-width content. */
export function Section({
  children,
  background = 'transparent',
  style,
  onLayoutY,
}: {
  children: ReactNode;
  background?: string;
  style?: ViewStyle;
  onLayoutY?: (y: number) => void;
}) {
  const { isPhone } = useBreakpoint();
  return (
    <View style={{ backgroundColor: background }} onLayout={onLayoutY ? (e) => onLayoutY(e.nativeEvent.layout.y) : undefined}>
      <View style={[styles.container, { paddingVertical: isPhone ? 44 : 72 }, style]}>{children}</View>
    </View>
  );
}

export function Eyebrow({ children, color = colors.magenta }: { children: ReactNode; color?: string }) {
  return <Text style={[styles.eyebrow, { color }]}>{children}</Text>;
}

export function H1({ children, color = colors.indigo }: { children: ReactNode; color?: string }) {
  const { isPhone } = useBreakpoint();
  return (
    <Text accessibilityRole="header" style={[styles.h1, { color, fontSize: isPhone ? 34 : 50, lineHeight: isPhone ? 40 : 58 }]}>
      {children}
    </Text>
  );
}

export function H2({ children, color = colors.indigo, center }: { children: ReactNode; color?: string; center?: boolean }) {
  const { isPhone } = useBreakpoint();
  return (
    <Text
      accessibilityRole="header"
      style={[styles.h2, { color, fontSize: isPhone ? 27 : 38, lineHeight: isPhone ? 33 : 46 }, center && { textAlign: 'center' }]}
    >
      {children}
    </Text>
  );
}

export function Body({ children, color = colors.indigo, style }: { children: ReactNode; color?: string; style?: object }) {
  return <Text style={[styles.body, { color }, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.cream },
  container: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center', paddingHorizontal: 20 },
  eyebrow: { fontFamily: fonts.bold, fontSize: 13, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12 },
  h1: { fontFamily: fonts.black, letterSpacing: -0.5 },
  h2: { fontFamily: fonts.black, letterSpacing: -0.3, marginBottom: 16 },
  body: { fontFamily: fonts.regular, fontSize: 17, lineHeight: 28 },
});
