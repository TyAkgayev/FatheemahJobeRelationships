import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, usePathname, type Href } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts, MAX_WIDTH, useBreakpoint } from '@/theme';
import { contact } from '@/content';
import { Button } from './Button';

const NAV: { label: string; href: Href }[] = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

function Logo() {
  return (
    <Link href="/" asChild>
      <Pressable accessibilityLabel="24/7 Relations home" style={styles.logo}>
        <Image source={require('../../assets/hourglass.png')} style={styles.logoMark} resizeMode="contain" />
        <View>
          <Text style={styles.logoNum}>24/7</Text>
          <Text style={styles.logoScript}>Relations</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export function Header() {
  const { isPhone } = useBreakpoint();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const [open, setOpen] = useState(false);

  const isActive = (href: Href) => (href === '/' ? pathname === '/' : pathname.startsWith(String(href)));

  return (
    <View style={[styles.bar, { paddingTop: insets.top }]}>
      <View style={styles.inner}>
        <Logo />

        {isPhone ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={open ? 'Close menu' : 'Open menu'}
            onPress={() => setOpen((o) => !o)}
            style={styles.menuBtn}
          >
            <View style={[styles.menuLine, open && { transform: [{ translateY: 7 }, { rotate: '45deg' }] }]} />
            <View style={[styles.menuLine, open && { opacity: 0 }]} />
            <View style={[styles.menuLine, open && { transform: [{ translateY: -7 }, { rotate: '-45deg' }] }]} />
          </Pressable>
        ) : (
          <>
            <View style={styles.nav}>
              {NAV.map((item, i) => (
                <View key={item.label} style={styles.navItem}>
                  {i > 0 && <Text style={styles.divider}>|</Text>}
                  <Link href={item.href} style={[styles.navLink, isActive(item.href) && styles.navLinkActive]}>
                    {item.label}
                  </Link>
                </View>
              ))}
            </View>
            <Button label="Book a Consultation" href={contact.consultationHref} size="sm" />
          </>
        )}
      </View>

      {isPhone && open && (
        <View style={styles.drawer}>
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onPress={() => setOpen(false)}
              style={[styles.drawerLink, isActive(item.href) && styles.navLinkActive]}
            >
              {item.label}
            </Link>
          ))}
          <Button label="Book a Consultation" href={contact.consultationHref} style={{ marginTop: 12 }} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    zIndex: 10,
  },
  inner: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  logo: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  logoMark: { width: 28, height: 46 },
  logoNum: { fontFamily: fonts.black, color: colors.indigo, fontSize: 15, letterSpacing: 1, lineHeight: 16 },
  logoScript: { fontFamily: fonts.script, color: colors.magenta, fontSize: 30, lineHeight: 34, marginTop: -4 },
  nav: { flexDirection: 'row', alignItems: 'center' },
  navItem: { flexDirection: 'row', alignItems: 'center' },
  divider: { color: colors.line, marginHorizontal: 12, fontFamily: fonts.regular },
  navLink: { fontFamily: fonts.semibold, color: colors.indigo, fontSize: 15, paddingVertical: 6 },
  navLinkActive: { color: colors.magenta, textDecorationLine: 'underline' },
  menuBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', gap: 5 },
  menuLine: { width: 24, height: 2, borderRadius: 2, backgroundColor: colors.indigo },
  drawer: {
    paddingHorizontal: 16,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  drawerLink: {
    fontFamily: fonts.bold,
    color: colors.indigo,
    fontSize: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
});
