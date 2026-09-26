import { Linking, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { router, type Href } from 'expo-router';
import { colors, fonts } from '@/theme';

type Props = {
  label: string;
  /** Internal route (e.g. "/services") or external URL (https:, tel:, sms:, mailto:) */
  href: string;
  variant?: 'marigold' | 'indigo' | 'outline' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
};

export function openHref(href: string) {
  if (/^(https?:|tel:|sms:|mailto:)/.test(href)) {
    Linking.openURL(href);
  } else {
    router.push(href as Href);
  }
}

export function Button({ label, href, variant = 'marigold', size = 'md', style }: Props) {
  const v = variantStyles[variant];
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => openHref(href)}
      style={({ pressed, hovered }: { pressed: boolean; hovered?: boolean }) => [
        styles.base,
        sizeStyles[size],
        v.box,
        (pressed || hovered) && v.active,
        pressed && { transform: [{ scale: 0.98 }] },
        style,
      ]}
    >
      <Text style={[styles.label, size === 'sm' && { fontSize: 14 }, size === 'lg' && { fontSize: 17 }, v.text]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  label: { fontFamily: fonts.bold, fontSize: 15, letterSpacing: 0.3, textAlign: 'center' },
});

const sizeStyles = StyleSheet.create({
  sm: { paddingVertical: 9, paddingHorizontal: 16 },
  md: { paddingVertical: 13, paddingHorizontal: 24 },
  lg: { paddingVertical: 17, paddingHorizontal: 30 },
});

const variantStyles = {
  marigold: StyleSheet.create({
    box: { backgroundColor: colors.marigold },
    active: { backgroundColor: colors.marigoldDark },
    text: { color: colors.indigo },
  }),
  indigo: StyleSheet.create({
    box: { backgroundColor: colors.indigo },
    active: { backgroundColor: colors.indigoSoft },
    text: { color: colors.white },
  }),
  outline: StyleSheet.create({
    box: { borderColor: colors.indigo, backgroundColor: 'transparent' },
    active: { backgroundColor: colors.blush },
    text: { color: colors.indigo },
  }),
  outlineLight: StyleSheet.create({
    box: { borderColor: colors.white, backgroundColor: 'transparent' },
    active: { backgroundColor: 'rgba(255,255,255,0.15)' },
    text: { color: colors.white },
  }),
};
