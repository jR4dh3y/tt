import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Avatar, Button, H2, ScrollView, Text, XStack, YStack, useTheme } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useThemeContext } from './context/theme';
import React from 'react';

export function profile() {
  const router = useRouter();
  const theme = useTheme();
  const { colors } = useThemeContext();

  return (
    <YStack f={1} backgroundColor={colors.background}>
      <ScrollView>
        {/* Profile Info - Horizontal Layout */}
        <YStack padding="$4" space="$4">
          <XStack space="$4" alignItems="center">
            <Avatar circular size="$8">
              <Avatar.Image source={{ uri: 'https://www.placekittens.com/500/500' }} />
              <Avatar.Fallback backgroundColor={colors.primary} />
            </Avatar>

            <YStack space="$1" flex={1}>
              <H2 color={colors.text}>Rahul Sharma</H2>
              <Text color={colors.textMuted} fontWeight="500">
                Striker • 5v5 Specialist
              </Text>
            </YStack>
          </XStack>

          <XStack space="$2">
            <Button
              icon={<Ionicons name="pencil-outline" size={20} color={colors.cardText} />}
              backgroundColor={colors.card}
              borderWidth={1.5}
              borderColor={colors.border}
              flex={1}>
              <Text color={colors.cardText} fontWeight="500">
                Edit Profile
              </Text>
            </Button>
            <Button
              icon={<Ionicons name="share-outline" size={20} color={colors.cardText} />}
              backgroundColor={colors.card}
              borderWidth={1.5}
              borderColor={colors.border}
              flex={1}>
              <Text color={colors.cardText} fontWeight="500">
                Share Profile
              </Text>
            </Button>
          </XStack>
        </YStack>

        {/* Career Stats */}
        <YStack padding="$4" space="$4">
          <Text fontWeight="bold" fontSize="$5" color={colors.text}>
            Career Stats
          </Text>

          {/* Main Stats Cards */}
          <XStack justifyContent="space-around" padding="$2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$7" fontWeight="bold" color={colors.primary}>
                87
              </Text>
              <Text color={colors.textMuted} fontWeight="500">
                Matches
              </Text>
            </YStack>
            <YStack alignItems="center" space="$1">
              <Text fontSize="$7" fontWeight="bold" color={colors.success}>
                76%
              </Text>
              <Text color={colors.textMuted} fontWeight="500">
                Win Rate
              </Text>
            </YStack>
            <YStack alignItems="center" space="$1">
              <Text fontSize="$7" fontWeight="bold" color={colors.highlight}>
                4.8
              </Text>
              <Text color={colors.textMuted} fontWeight="500">
                Rating
              </Text>
            </YStack>
          </XStack>

          {/* Detailed Performance Metrics */}
          <YStack
            backgroundColor={colors.card}
            borderRadius="$4"
            borderWidth={1}
            borderColor={colors.border}
            padding="$4"
            space="$3">
            <Text fontWeight="bold" color={colors.text}>
              Performance Stats
            </Text>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Goals Scored</Text>
              <Text fontWeight="bold" color={colors.text}>
                124
              </Text>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Assists</Text>
              <Text fontWeight="bold" color={colors.text}>
                47
              </Text>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Goals per Match</Text>
              <Text fontWeight="bold" color={colors.text}>
                1.4
              </Text>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Shot Accuracy</Text>
              <Text fontWeight="bold" color={colors.text}>
                68%
              </Text>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>MVP Awards</Text>
              <Text fontWeight="bold" color={colors.text}>
                15
              </Text>
            </XStack>
          </YStack>

          {/* Playing Style */}
          <YStack
            backgroundColor={colors.card}
            borderRadius="$4"
            borderWidth={1}
            borderColor={colors.border}
            padding="$4"
            space="$3">
            <Text fontWeight="bold" color={colors.text}>
              Playing Style
            </Text>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Preferred Position</Text>
              <Text fontWeight="bold" color={colors.text}>
                Striker
              </Text>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Preferred Foot</Text>
              <Text fontWeight="bold" color={colors.text}>
                Right
              </Text>
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text color={colors.textMuted}>Play Style</Text>
              <Text fontWeight="bold" color={colors.text}>
                Attacking
              </Text>
            </XStack>
          </YStack>

          {/* Recent Activity */}
          <YStack space="$4">
            <Text fontWeight="bold" fontSize="$5" color={colors.text}>
              Recent Match
            </Text>

            {/* Match History Card */}
            <YStack
              backgroundColor={colors.card}
              borderRadius="$4"
              borderWidth={1}
              borderColor={colors.border}
              padding="$4"
              space="$2">
              <XStack justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" color={colors.cardText}>
                  Green Field Turf
                </Text>
                <Text color={colors.success} fontWeight="bold">
                  Won 4-2
                </Text>
              </XStack>

              <XStack space="$4" alignItems="center">
                <XStack space="$2" alignItems="center">
                  <Ionicons name="calendar-outline" size={16} color={colors.primary} />
                  <Text color={colors.textMuted}>Yesterday</Text>
                </XStack>
                <XStack space="$2" alignItems="center">
                  <Ionicons name="football-outline" size={16} color={colors.primary} />
                  <Text color={colors.textMuted}>5v5</Text>
                </XStack>
                <XStack space="$2" alignItems="center">
                  <Ionicons name="star-outline" size={16} color={colors.primary} />
                  <Text color={colors.textMuted}>2G 1A</Text>
                </XStack>
              </XStack>

              <XStack space="$2" alignItems="center" marginTop="$1">
                <Avatar circular size="$2">
                  <Avatar.Image source={{ uri: 'https://placekitten.com/100/100' }} />
                </Avatar>
                <Text color={colors.textMuted} fontSize="$2">
                  Played with Amit, Priya, and 7 others
                </Text>
              </XStack>
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </YStack>
  );
}

export default profile;
