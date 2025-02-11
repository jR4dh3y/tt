import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Avatar, Button, Input, Text, XStack, YStack, Card, ScrollView, useTheme } from 'tamagui';
import { View, useColorScheme } from 'react-native';

interface Match {
  id: number;
  location: string;
  time: string;
  players: string;
  distance: string;
  level: string;
  organizer: {
    name: string;
    avatar: string;
  };
}

const MOCK_MATCHES: Match[] = [
  {
    id: 1,
    location: "Green Field Turf",
    time: "Today, 5:00 PM",
    players: "5/10",
    distance: "0.8 km",
    level: "Intermediate",
    organizer: {
      name: "niraj",
      avatar: "https://placekitten.com/100/100"
    }
  },
  {
    id: 2,
    location: "Central Park Court",
    time: "Tomorrow, 3:30 PM",
    players: "3/8",
    distance: "1.2 km",
    level: "Beginner",
    organizer: {
      name: "neeraj2",
      avatar: "https://placekitten.com/101/101"
    }
  }
];

export default function TabOneScreen() {
  const router = useRouter();
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <YStack f={1} backgroundColor="$background">
      <Stack.Screen 
        options={{ 
          header: () => (
            <View style={{ 
              paddingTop: 45,
              paddingBottom: 8,
              backgroundColor: theme.background.val,
              borderBottomWidth: 1,
              borderBottomColor: isDark ? theme.gray8.val : theme.gray5.val,
            }}>
              <YStack paddingHorizontal="$4" space="$2.5">
                <XStack space="$2" alignItems="center" justifyContent="space-between">
                  <XStack flex={1} alignItems="center" space="$2">
                    <Ionicons 
                      name="location" 
                      size={20} 
                      color={theme.blue10.val}
                    />
                    <XStack alignItems="center" space="$1">
                      <Text 
                        fontSize={18} 
                        fontWeight="bold" 
                        numberOfLines={1}
                        color="$color"
                      >
                        gandhi nagar,jammU 
                      </Text>
                      <Ionicons 
                        name="chevron-down" 
                        size={18} 
                        color={theme.gray10.val}
                      />
                    </XStack>
                  </XStack>
                  <Button
                    size="$3"
                    circular
                    icon={
                      <Ionicons 
                        name="person-circle-outline" 
                        size={24} 
                        color={theme.color.val}
                      />
                    }
                    onPress={() => router.push('/modal')}
                    backgroundColor="transparent"
                  />
                </XStack>
                
                <XStack space="$2" alignItems="center">
                  <Input
                    flex={1}
                    placeholder="Search matches..."
                    placeholderTextColor="$gray10"
                    leftElement={
                      <Ionicons 
                        name="search" 
                        size={20} 
                        color={theme.gray10.val}
                        style={{ marginLeft: 8 }} 
                      />
                    }
                    backgroundColor="$gray2"
                    borderWidth={1}
                    borderColor="$gray5"
                    size="$3"
                    color="$color"
                  />
                  <Button
                    size="$3"
                    circular
                    icon={
                      <Ionicons 
                        name="calendar-outline" 
                        size={24} 
                        color={theme.color.val}
                      />
                    }
                    onPress={() => {/* Add date picker logic */}}
                    backgroundColor="transparent"
                  />
                </XStack>
              </YStack>
            </View>
          ),
        }} 
      />
      
      <ScrollView>
        <YStack padding="$4" space="$4">
          {MOCK_MATCHES.map((match) => (
            <Card
              key={match.id}
              bordered
              elevate
              size="$4"
              backgroundColor="$blue2"
              borderRadius="$4"
              borderWidth={1}
              borderColor="$blue4"
              animation="bouncy"
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              onPress={() => {/* Add card press logic */}}
            >
              <Card.Header padded>
                <XStack justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold" color="$gray12">
                    {match.location}
                  </Text>
                  <Text color="$green10" fontWeight="bold">Available</Text>
                </XStack>
              </Card.Header>

              <Card.Footer padded>
                <YStack space="$2">
                  <XStack space="$4" alignItems="center">
                    <XStack space="$2" alignItems="center">
                      <Ionicons name="calendar-outline" size={16} color={theme.blue10.val} />
                      <Text color="$gray11">{match.time}</Text>
                    </XStack>
                    <XStack space="$2" alignItems="center">
                      <Ionicons name="people-outline" size={16} color={theme.blue10.val} />
                      <Text color="$gray11">{match.players}</Text>
                    </XStack>
                    <XStack space="$2" alignItems="center">
                      <Ionicons name="trophy-outline" size={16} color={theme.blue10.val} />
                      <Text color="$gray11">{match.level}</Text>
                    </XStack>
                  </XStack>

                  <XStack space="$2" alignItems="center" marginTop="$1">
                    <Avatar circular size="$2">
                      <Avatar.Image source={{ uri: match.organizer.avatar }} />
                    </Avatar>
                    <Text color="$gray11" fontSize="$2">
                      Organized by {match.organizer.name}
                    </Text>
                  </XStack>
                </YStack>
              </Card.Footer>
            </Card>
          ))}
        </YStack>
      </ScrollView>

      <Button
        size="$6"
        circular
        icon={<Ionicons name="add" size={24} color="#fff" />}
        position="absolute"
        bottom={20}
        right={20}
        theme="active"
        onPress={() => {/* Add logic for creating new match */}}
      />
    </YStack>
  );
}