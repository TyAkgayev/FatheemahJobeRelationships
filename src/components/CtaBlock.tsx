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
          You don't have to stay stuck in the same exhausting patterns. Let's get to work. Call or text me
          today at {contact.phoneDisplay}.
        </Text>
        <View style={[styles.row, isPhone && { flexDirection: 'column', alignSelf: 'stretch', alignItems: 'stretch' }]}>
          <Button label={`Call ${contact.phoneDisplay}`} href={contact.phoneHref} size="lg" />
          <Button label={`Text ${contact.phoneDisplay}`} href={contact.smsHref} variant="outlineLight" size="lg" />
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
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 },
});
