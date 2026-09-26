import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { colors, fonts, MAX_WIDTH, useBreakpoint } from '@/theme';
import { contact } from '@/content';
import { openHref } from './Button';

export function Footer() {
  const { isPhone } = useBreakpoint();
  return (
    <View style={styles.footer}>
      <View style={[styles.inner, { flexDirection: isPhone ? 'column' : 'row' }]}>
        <View style={{ flex: isPhone ? undefined : 1.2, gap: 6 }}>
          <Text style={styles.brand}>
            24/7 <Text style={styles.script}>Relations</Text>
          </Text>
          <Text style={styles.muted}>Mrs. Fateemah Jobe · The Relationship Builder</Text>
          <Text style={styles.muted}>Telehealth therapy for individuals, couples & families.</Text>
        </View>

        <View style={{ flex: isPhone ? undefined : 1, gap: 8 }}>
          <Text style={styles.heading}>Explore</Text>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/about" style={styles.link}>About Me</Link>
          <Link href="/services" style={styles.link}>Services</Link>
          <Link href="/contact" style={styles.link}>Contact</Link>
        </View>

        <View style={{ flex: isPhone ? undefined : 1.2, gap: 8 }}>
          <Text style={styles.heading}>Reach Out</Text>
          <Text style={styles.link} onPress={() => openHref(contact.phoneHref)}>Call or text {contact.phoneDisplay}</Text>
          <Text style={styles.link} onPress={() => openHref(contact.emailHref)}>{contact.email}</Text>
          <Text style={styles.link} onPress={() => openHref(contact.instagramHref)}>Instagram: @{contact.instagramHandle}</Text>
          <Text style={styles.link} onPress={() => openHref(contact.youtubeHref)}>YouTube: {contact.youtubeName}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.fine}>
          If you are in crisis or thinking about harming yourself, call or text 988 (Suicide & Crisis Lifeline) or dial 911.
        </Text>
        <Text style={styles.fine}>© {new Date().getFullYear()} 24/7 Relations. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { backgroundColor: colors.indigo },
  inner: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 44, gap: 32 },
  brand: { fontFamily: fonts.black, color: colors.white, fontSize: 20 },
  script: { fontFamily: fonts.script, color: colors.marigold, fontSize: 32 },
  heading: { fontFamily: fonts.bold, color: colors.marigold, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  link: { fontFamily: fonts.medium, color: colors.white, fontSize: 15, lineHeight: 22 },
  muted: { fontFamily: fonts.regular, color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 21 },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 18,
    paddingHorizontal: 20,
    gap: 6,
    alignItems: 'center',
  },
  fine: { fontFamily: fonts.regular, color: 'rgba(255,255,255,0.65)', fontSize: 12, textAlign: 'center', lineHeight: 18 },
});
