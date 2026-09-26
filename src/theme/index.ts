import { useWindowDimensions } from 'react-native';

export const colors = {
  indigo: '#2B1B5A', // Deep Indigo – primary text & headers
  indigoSoft: '#4A3D78',
  terracotta: '#C4623A', // Warm Terracotta – CTA blocks
  terracottaDark: '#A84E2B',
  marigold: '#F4A81D', // Vibrant Marigold – buttons
  marigoldDark: '#D98F0A',
  magenta: '#B0158F', // brand accent from the flyer
  blush: '#FBE9F1',
  cream: '#FFF8F4',
  white: '#FFFFFF',
  line: '#EADCE6',
};

export const fonts = {
  script: 'GreatVibes_400Regular',
  regular: 'Montserrat_400Regular',
  medium: 'Montserrat_500Medium',
  semibold: 'Montserrat_600SemiBold',
  bold: 'Montserrat_700Bold',
  black: 'Montserrat_800ExtraBold',
};

export const MAX_WIDTH = 1120;

/** Breakpoints: phone < 768 <= tablet < 1024 <= desktop */
export function useBreakpoint() {
  const { width } = useWindowDimensions();
  return {
    width,
    isPhone: width < 768,
    isDesktop: width >= 1024,
  };
}
