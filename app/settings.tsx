import React from 'react';
import { YStack, Button, Text, XStack } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useThemeContext } from './context/theme';

export default function SettingsScreen() {
  const router = useRouter();
  const { isDarkMode, toggleTheme, colors } = useThemeContext();

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <YStack f={1} backgroundColor={colors.background} padding="$4" space="$4">
      <Text fontSize="$6" fontWeight="bold" color={colors.text}>Settings</Text>

      <Button
        size="$4"
        icon={<Ionicons name={isDarkMode ? "sunny-outline" : "moon-outline"} size={20} color={colors.text} />}
        onPress={toggleTheme}
        backgroundColor={colors.card}
        borderWidth={1}
        borderColor={colors.border}
      >
        <Text color={colors.text}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</Text>
      </Button>

      <Button
        size="$4"
        backgroundColor={colors.primaryDark}
        icon={<Ionicons name="log-out-outline" size={20} color={colors.text} />}
        onPress={handleLogout}
      >
        <Text color={colors.text}>Logout</Text>
      </Button>
    </YStack>
  );
} 