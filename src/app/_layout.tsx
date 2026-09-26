import { View } from 'react-native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { Header } from '@/components/Header';
import { colors } from '@/theme';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    GreatVibes_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  // Fall back to system fonts rather than a blank screen if fonts fail.
  if (!loaded && !error) return <View style={{ flex: 1, backgroundColor: colors.cream }} />;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: colors.cream }}>
        <Header />
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
