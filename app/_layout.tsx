import { Stack } from 'expo-router';
import { TamaguiProvider, Theme, useTheme, XStack, Button } from 'tamagui';
import { useFonts } from 'expo-font';
import { useColorScheme } from 'react-native';
import config from '../tamagui.config';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Change initial route to login
  initialRouteName: 'login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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
      <TamaguiProvider config={config} defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}>
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
              },
              headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
              contentStyle: {
                backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
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
                    backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'}
                    borderBottomWidth={1}
                    borderBottomColor={colorScheme === 'dark' ? '#333' : '#eee'}
                    padding="$4"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Button
                      icon={<Ionicons name="chevron-back" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />}
                      size="$3"
                      circular
                      onPress={() => navigation.goBack()}
                      backgroundColor="transparent"
                    />
                    <Button
                      icon={<Ionicons name="settings-outline" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />}
                      size="$3"
                      circular
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
          </Stack>
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
