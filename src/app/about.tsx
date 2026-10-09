import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, useBreakpoint } from '@/theme';
import { contact } from '@/content';
import { Button } from '@/components/Button';
import { Body, Eyebrow, H1, H2, Page, Section } from '@/components/Layout';
import { CtaBlock } from '@/components/CtaBlock';

const PILLARS = [
  { title: 'Absolute confidence', text: 'We name the hard things—sex, intimacy, conflict—plainly and without flinching.' },
  { title: 'Total privacy', text: 'Secure telehealth sessions, wherever you are most comfortable.' },
  { title: 'Zero judgment', text: 'Shame-free conversations for every kind of relationship and every kind of person.' },
];

export default function About() {
  const { isPhone } = useBreakpoint();

  return (
    <Page>
      <Section background={colors.blush}>
        <View style={[styles.hero, { flexDirection: isPhone ? 'column' : 'row' }]}>
          <View style={[styles.ring, { width: isPhone ? 170 : 240, height: isPhone ? 170 : 240 }]}>
            <Image source={require('../../assets/fateemah.png')} style={{ width: '100%', height: '100%' }} accessibilityLabel="Mrs. Fateemah Jobe" />
          </View>
          <View style={{ flexShrink: 1, gap: 14 }}>
            <Eyebrow>About Me</Eyebrow>
            <H1>Real Therapy for Real People.</H1>
            <Text style={styles.sig}>Mrs. Fateemah Jobe</Text>
            <Body style={{ fontFamily: fonts.semibold }}>
              Marriage and Family Therapist · Relationships & Sex Therapy · Telehealth
            </Body>
          </View>
        </View>
      </Section>

      <Section>
        <View style={{ maxWidth: 820, gap: 18 }}>
          <Eyebrow>My Approach</Eyebrow>
          <H2>Active collaboration, no passive nodding.</H2>
          <Body>
            I don't just sit back, nod, and ask "how does that make you feel?" You deserve more than that. We talk
            about intimacy, sex, and relationship (family, friends, intimate partners) issues with absolute
            confidence, total privacy, and zero judgment. No tiptoeing—just real solutions!
          </Body>
          <Body>
            My therapeutic style is dynamic, direct, and collaborative. We are going to look under the rug of what
            is keeping you stuck, whether that is a nervous system hijacked by PTSD, depression and anxiety, a
            relationship trapped in repetitive arguments, or unspoken frustrations in your sex life. We will tackle
            it all with absolute dignity, real solutions that work, and even a little bit of humor when
            appropriate.
          </Body>
        </View>

        <View style={[styles.pillars, { flexDirection: isPhone ? 'column' : 'row' }]}>
          {PILLARS.map((p) => (
            <View key={p.title} style={[styles.pillar, !isPhone && { flex: 1 }]}>
              <Text style={styles.pillarTitle}>{p.title}</Text>
              <Body color={colors.white} style={{ fontSize: 16, lineHeight: 25 }}>{p.text}</Body>
            </View>
          ))}
        </View>

        <View style={[styles.btnRow, isPhone && { flexDirection: 'column', alignItems: 'stretch' }]}>
          <Button label="Explore Services" href="/services" variant="indigo" />
          <Button label={`Call or Text ${contact.phoneDisplay}`} href={contact.phoneHref} />
        </View>
      </Section>

      <CtaBlock />
    </Page>
  );
}

const styles = StyleSheet.create({
  hero: { gap: 32, alignItems: 'center' },
  ring: { borderRadius: 999, borderWidth: 7, borderColor: colors.magenta, overflow: 'hidden' },
  sig: { fontFamily: fonts.script, color: colors.magenta, fontSize: 40, lineHeight: 46 },
  pillars: { gap: 16, marginTop: 36 },
  pillar: { backgroundColor: colors.indigo, borderRadius: 20, padding: 24, gap: 8 },
  pillarTitle: { fontFamily: fonts.black, color: colors.marigold, fontSize: 19 },
  btnRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 32 },
});
