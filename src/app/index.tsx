import { Image, StyleSheet, Text, View } from 'react-native';
import { Link, type Href } from 'expo-router';
import { colors, fonts, useBreakpoint } from '@/theme';
import { contact } from '@/content';
import { Button } from '@/components/Button';
import { Body, Eyebrow, H1, H2, Page, Section } from '@/components/Layout';
import { ConnectingShape, GroundingShape } from '@/components/Shapes';
import { CtaBlock } from '@/components/CtaBlock';

export default function Home() {
  const { isPhone } = useBreakpoint();

  return (
    <Page>
      {/* Hero */}
      <Section background={colors.blush}>
        <View style={[styles.hero, { flexDirection: isPhone ? 'column-reverse' : 'row' }]}>
          <View style={{ flex: isPhone ? undefined : 1.3, gap: 18 }}>
            <Eyebrow>Telehealth · Therapy Available 24/7</Eyebrow>
            <H1>Our problems are not just 9–5. Your therapist shouldn't be either.</H1>
            <Body>
              I'm Mrs. Fateemah Jobe, a Marriage and Family Therapist specializing in relationships and Sex
              Therapy. I'm committed to providing an empowering, supportive, and safe space for individuals,
              couples and families navigating a wide range of relational, individual and sexual challenges.
            </Body>
            <View style={[styles.btnRow, isPhone && { flexDirection: 'column', alignItems: 'stretch' }]}>
              <Button label="Book a Free 15-Min Consultation" href={contact.consultationHref} size="lg" />
              <Button label={`Call or Text ${contact.phoneDisplay}`} href={contact.phoneHref} variant="outline" size="lg" />
            </View>
          </View>

          <View style={[styles.portraitWrap, { flex: isPhone ? undefined : 1 }]}>
            <View style={[styles.ring, { width: isPhone ? 190 : 280, height: isPhone ? 190 : 280 }]}>
              <Image
                source={require('../../assets/fateemah.png')}
                style={styles.portrait}
                accessibilityLabel="Mrs. Fateemah Jobe"
              />
            </View>
            <Text style={styles.portraitName}>Mrs. Fateemah Jobe</Text>
            <Text style={styles.portraitTitle}>The Relationship Builder</Text>
            <Text style={styles.portraitSub}>Therapy for Individuals, Couples, and Families</Text>
          </View>
        </View>
      </Section>

      {/* The "We Tackle the Heavy Stuff" split grid */}
      <Section>
        <Eyebrow>Find your starting point</Eyebrow>
        <H2>We Tackle the Heavy Stuff</H2>
        <View style={[styles.grid, { flexDirection: isPhone ? 'column' : 'row' }]}>
          <RouteCard
            shape={<GroundingShape />}
            heading="For Individuals"
            text="Anxiety, depression, PTSD, and low mood. Let's get your nervous system out of survival mode and reclaim your daily momentum."
            linkLabel="Learn about Individual Support →"
            href="/services?section=individual"
          />
          <RouteCard
            shape={<ConnectingShape />}
            heading="For Couples & Families"
            text="Marriage friction, family systems, and sexual/intimacy issues. Open, comfortable, and shame-free solutions for your home."
            linkLabel="Learn about Relationship Support →"
            href="/services?section=relationships"
          />
        </View>
      </Section>

      {/* About teaser */}
      <Section background={colors.white}>
        <View style={{ maxWidth: 760, alignSelf: 'center', alignItems: 'center', gap: 8 }}>
          <Eyebrow>My Approach</Eyebrow>
          <H2 center>Active collaboration, no passive nodding.</H2>
          <Body style={{ textAlign: 'center' }}>
            We talk about intimacy, sex, and relationship issues with absolute confidence, total privacy, and
            zero judgment. No tiptoeing—just real solutions!
          </Body>
          <Button label="Meet Mrs. Jobe" href="/about" variant="indigo" style={{ marginTop: 16 }} />
        </View>
      </Section>

      <CtaBlock />
    </Page>
  );
}

function RouteCard(props: { shape: React.ReactNode; heading: string; text: string; linkLabel: string; href: Href }) {
  const { isPhone } = useBreakpoint();
  return (
    <View style={[styles.card, !isPhone && { flex: 1 }]}>
      {props.shape}
      <Text style={styles.cardHeading}>{props.heading}</Text>
      <Body>{props.text}</Body>
      <View style={{ flexGrow: 1 }} />
      <Link href={props.href} style={styles.cardLink}>
        {props.linkLabel}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { gap: 36, alignItems: 'center' },
  btnRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 6 },
  portraitWrap: { alignItems: 'center', gap: 4 },
  ring: {
    borderRadius: 999,
    borderWidth: 7,
    borderColor: colors.magenta,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginBottom: 14,
  },
  portrait: { width: '100%', height: '100%' },
  portraitName: { fontFamily: fonts.black, color: colors.indigo, fontSize: 20 },
  portraitTitle: { fontFamily: fonts.script, color: colors.magenta, fontSize: 32, lineHeight: 38 },
  portraitSub: { fontFamily: fonts.semibold, color: colors.indigoSoft, fontSize: 14, textAlign: 'center' },
  grid: { gap: 20, marginTop: 12 },
  card: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 28,
    gap: 14,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardHeading: { fontFamily: fonts.black, color: colors.indigo, fontSize: 26 },
  cardLink: { fontFamily: fonts.bold, color: colors.terracotta, fontSize: 16, marginTop: 6 },
});
