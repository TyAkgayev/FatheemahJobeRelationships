import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, useBreakpoint } from '@/theme';
import { contact } from '@/content';
import { Button, openHref } from '@/components/Button';
import { Body, Eyebrow, H1, Page, Section } from '@/components/Layout';

const METHODS = [
  { label: 'Call', value: contact.phoneDisplay, href: contact.phoneHref },
  { label: 'Text', value: contact.phoneDisplay, href: contact.smsHref },
  { label: 'Email', value: contact.email, href: contact.emailHref },
  { label: 'Instagram', value: `@${contact.instagramHandle}`, href: contact.instagramHref },
  { label: 'YouTube', value: contact.youtubeName, href: contact.youtubeHref },
];

export default function Contact() {
  const { isPhone } = useBreakpoint();

  return (
    <Page>
      <Section background={colors.blush}>
        <View style={{ maxWidth: 760, gap: 16 }}>
          <Eyebrow>Contact</Eyebrow>
          <H1>Let's get to work.</H1>
          <Body>
            Have you ever had a therapist available 24/7? Call or text me at {contact.phoneDisplay} to get
            started, or reach out any way that feels comfortable.
          </Body>
          <View style={[styles.btnRow, isPhone && { flexDirection: 'column', alignItems: 'stretch' }]}>
            <Button label={`Call ${contact.phoneDisplay}`} href={contact.phoneHref} size="lg" />
            <Button label={`Text ${contact.phoneDisplay}`} href={contact.smsHref} variant="outline" size="lg" />
          </View>
        </View>
      </Section>

      <Section>
        <View style={[styles.grid, { flexDirection: isPhone ? 'column' : 'row' }]}>
          {METHODS.map((m) => (
            <Pressable
              key={m.label}
              accessibilityRole="link"
              onPress={() => openHref(m.href)}
              style={({ pressed, hovered }: { pressed: boolean; hovered?: boolean }) => [
                styles.card,
                !isPhone && { width: '31.5%' },
                (pressed || hovered) && { borderColor: colors.magenta },
              ]}
            >
              <Text style={styles.cardLabel}>{m.label}</Text>
              <Text style={styles.cardValue}>{m.value}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.note}>
          Telehealth sessions for individuals, couples, and families. If you are in crisis, call or text 988 or
          dial 911.
        </Text>
      </Section>
    </Page>
  );
}

const styles = StyleSheet.create({
  btnRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 8 },
  grid: { flexWrap: 'wrap', gap: 16 },
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 22,
    gap: 6,
    borderWidth: 2,
    borderColor: colors.line,
  },
  cardLabel: { fontFamily: fonts.bold, color: colors.terracotta, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' },
  cardValue: { fontFamily: fonts.bold, color: colors.indigo, fontSize: 18 },
  note: { fontFamily: fonts.regular, color: colors.indigoSoft, fontSize: 14, marginTop: 28, lineHeight: 21 },
});
