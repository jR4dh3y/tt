import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '../../components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Social' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/social.tsx" title="Social" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
