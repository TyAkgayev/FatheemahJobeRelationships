import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors, fonts, useBreakpoint } from '@/theme';
import { Body, Eyebrow, H1, H2, Page, Section } from '@/components/Layout';
import { ConnectingShape, GroundingShape } from '@/components/Shapes';
import { CtaBlock } from '@/components/CtaBlock';

type Focus = { title: string; text: string };

const INDIVIDUAL: Focus[] = [
  { title: 'Anxiety & Overwhelm', text: 'Stop letting racing thoughts dictate your day and learn to command your calm.' },
  { title: 'Depression & Low Mood', text: 'Shake off the heavy fog, rebuild your daily momentum, and rediscover your energy.' },
  { title: 'PTSD & Trauma', text: 'Process the painful past so it stops hijacking your present-day peace and safety.' },
];

const RELATIONAL: Focus[] = [
  {
    title: 'Marriage & Couples Therapy',
    text: 'Unpack repetitive arguments, repair broken trust, and rewrite your relationship rules.',
  },
  {
    title: 'Sex & Intimacy Therapy',
    text: 'Address low desire, performance anxiety, and sexual health openly to build a vibrant intimate life.',
  },
  {
    title: 'Family Systems',
    text: 'Navigate conflict, fix communication gaps, and establish boundaries that actually protect your peace.',
  },
];

export default function Services() {
  const { isPhone } = useBreakpoint();
  const { section } = useLocalSearchParams<{ section?: string }>();
  const scrollRef = useRef<ScrollView>(null);
  const [offsets, setOffsets] = useState<Record<string, number>>({});

  // Deep-link support: /services?section=individual | relationships
  useEffect(() => {
    const y = section ? offsets[section] : undefined;
    if (y !== undefined) scrollRef.current?.scrollTo({ y, animated: true });
  }, [section, offsets]);

  const record = (key: string) => (y: number) => setOffsets((o) => (o[key] === y ? o : { ...o, [key]: y }));

  return (
    <Page ref={scrollRef}>
      <Section background={colors.blush}>
        <View style={{ maxWidth: 820, gap: 16 }}>
          <Eyebrow>Services</Eyebrow>
          <H1>Real Life, Real Growth.</H1>
          <Body>
            Straight-to-the-point therapy for the things that actually keep you up at night—delivered by
            telehealth, on a schedule that fits real life.
          </Body>
        </View>
      </Section>

      {/* Section 1: Individual Support */}
      <Section onLayoutY={record('individual')}>
        <ServiceBlock
          isPhone={isPhone}
          shape={<GroundingShape size={isPhone ? 72 : 110} />}
          eyebrow="Individual Support"
          headline="Break Through the Heavy Stuff!"
          intro="Let's be honest: walking into a therapy office—or opening a virtual session—takes immense courage."
          items={INDIVIDUAL}
          accent={colors.terracotta}
        />
      </Section>

      {/* Section 2: Relationships & Sex Therapy */}
      <Section background={colors.white} onLayoutY={record('relationships')}>
        <ServiceBlock
          isPhone={isPhone}
          shape={<ConnectingShape size={isPhone ? 72 : 110} />}
          eyebrow="Relationships & Sex Therapy"
          headline="Rebuild Trust, Intimacy, & Connection"
          intro="Communication breakdowns, sexual issues, and family stress are exhausting, but they are also deeply human."
          items={RELATIONAL}
          accent={colors.magenta}
        />
      </Section>

      <CtaBlock />
    </Page>
  );
}

function ServiceBlock(props: {
  isPhone: boolean;
  shape: React.ReactNode;
  eyebrow: string;
  headline: string;
  intro: string;
  items: Focus[];
  accent: string;
}) {
  const { isPhone } = props;
  return (
    <View style={{ gap: 8 }}>
      <View style={[styles.head, { flexDirection: isPhone ? 'column' : 'row', alignItems: isPhone ? 'flex-start' : 'center' }]}>
        {props.shape}
        <View style={{ flexShrink: 1 }}>
          <Eyebrow>{props.eyebrow}</Eyebrow>
          <H2>{props.headline}</H2>
          <Body style={{ maxWidth: 760, fontFamily: fonts.medium }}>{props.intro}</Body>
        </View>
      </View>

      <View style={[styles.items, { flexDirection: isPhone ? 'column' : 'row' }]}>
        {props.items.map((item) => (
          <View key={item.title} style={[styles.item, { borderTopColor: props.accent }, !isPhone && { flex: 1 }]}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Body>{item.text}</Body>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: { gap: 24, marginBottom: 20 },
  items: { gap: 18 },
  item: {
    backgroundColor: colors.cream,
    borderRadius: 18,
    borderTopWidth: 6,
    padding: 24,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.line,
  },
  itemTitle: { fontFamily: fonts.black, color: colors.indigo, fontSize: 20 },
});
