import { Stack } from 'expo-router';
import { TamaguiProvider, Theme, XStack, Button } from 'tamagui';
import { useFonts } from 'expo-font';
import { useColorScheme } from 'react-native';
import config from '../tamagui.config';
import { useEffect } from 'react';
import { ErrorBoundary, SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useThemeContext } from './context/theme';

export { ErrorBoundary };

export const unstable_settings = {
  initialRouteName: 'login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { isDarkMode, colors } = useThemeContext();

  return (
    <TamaguiProvider config={config} defaultTheme={isDarkMode ? 'dark' : 'light'}>
      <Theme name={isDarkMode ? 'dark' : 'light'}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            contentStyle: {
              backgroundColor: colors.background,
            },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false,
              animation: 'fade',
            }} 
          />
          <Stack.Screen 
            name="modal" 
            options={({ navigation }) => ({
              headerShown: true,
              animation: 'slide_from_bottom',
              header: () => (
                <XStack 
                  backgroundColor={colors.background}
                  borderBottomWidth={1}
                  borderBottomColor={colors.border}
                  padding="$2"
                  paddingHorizontal="$3"
                  justifyContent="space-between"
                  alignItems="center"
                  height={50}
                >
                  <Button
                    icon={<Ionicons name="chevron-back" size={24} color={colors.text} />}
                    size="$3"
                    circular
                    onPress={() => navigation.goBack()}
                    backgroundColor="transparent"
                  />
                  <Button
                    icon={<Ionicons name="settings-outline" size={24} color={colors.text} />}
                    size="$3"
                    circular
                    onPress={() => {
                      navigation.goBack();
                      requestAnimationFrame(() => {
                        navigation.push('settings');
                      });
                    }}
                    backgroundColor="transparent"
                  />
                </XStack>
              ),
            })} 
          />
          <Stack.Screen 
            name="login" 
            options={{ 
              headerShown: false,
              animation: 'fade_from_bottom',
              gestureEnabled: false,
            }} 
          />
          <Stack.Screen 
            name="settings" 
            options={{ 
              headerShown: true,
              title: 'Settings',
              animation: 'slide_from_right',
              presentation: 'push',
            }} 
          />
        </Stack>
      </Theme>
    </TamaguiProvider>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootLayoutNav />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
