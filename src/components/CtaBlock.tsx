import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, useBreakpoint } from '@/theme';
import { contact } from '@/content';
import { Button } from './Button';
import { Section } from './Layout';

/** "Ready to change the narrative?" — Warm Terracotta block with Marigold button. */
export function CtaBlock() {
  const { isPhone } = useBreakpoint();
  return (
    <Section>
      <View style={[styles.block, { padding: isPhone ? 28 : 56 }]}>
        <Text style={[styles.headline, { fontSize: isPhone ? 30 : 44, lineHeight: isPhone ? 36 : 52 }]}>
          Ready to change the narrative?
        </Text>
        <Text style={styles.text}>
          You don't have to stay stuck in the same exhausting patterns. Let's get to work. Book a brief,
          no-pressure consultation today.
        </Text>
        <Button
          label="For a free 15-minute consultation click here"
          href={contact.consultationHref}
          size="lg"
          style={{ alignSelf: isPhone ? 'stretch' : 'center', marginTop: 8 }}
        />
        <View style={[styles.row, { flexDirection: isPhone ? 'column' : 'row' }]}>
          <Text style={styles.or}>Or call or text</Text>
          <View style={styles.row}>
            <Button label={`Call ${contact.phoneDisplay}`} href={contact.phoneHref} variant="outlineLight" size="sm" />
            <Button label="Text" href={contact.smsHref} variant="outlineLight" size="sm" />
          </View>
        </View>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.terracotta,
    borderRadius: 28,
    alignItems: 'center',
    gap: 16,
  },
  headline: { fontFamily: fonts.black, color: colors.white, textAlign: 'center' },
  text: {
    fontFamily: fonts.medium,
    color: colors.white,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    maxWidth: 640,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' },
  or: { fontFamily: fonts.semibold, color: colors.white, fontSize: 15 },
});
