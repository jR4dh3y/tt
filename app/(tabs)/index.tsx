import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import {
  Avatar,
  Button,
  Input,
  Text,
  XStack,
  YStack,
  Card,
  ScrollView,
  useTheme,
  Sheet,
} from 'tamagui';
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
    location: 'Green Field Turf',
    time: 'Today, 5:00 PM',
    players: '5/10',
    distance: '0.8 km',
    level: 'Intermediate',
    organizer: {
      name: "Ravi Kumar",
      avatar: "https://placekitten.com/100/100"
    }
  },
  {
    id: 2,
    location: 'Central Park Court',
    time: 'Tomorrow, 3:30 PM',
    players: '3/8',
    distance: '1.2 km',
    level: 'Beginner',
    organizer: {
      name: "Sneha Patel",
      avatar: "https://placekitten.com/101/101"
    }
  }
];

export default function TabOneScreen() {
  const router = useRouter();
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Add state for dropdowns
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Gandhi Nagar, Jammu');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [matchDetailsOpen, setMatchDetailsOpen] = useState(false);

  // Sample locations
  const locations = [
    'Gandhi Nagar, Jammu',
    'Marine Drive, Mumbai',
    'Green Park, Delhi',
    'MG Road, Bangalore',
  ];

  // Sample dates
  const dates = ['Today', 'Tomorrow', 'This Weekend', 'Next Week'];

  const handleCardPress = (match: Match) => {
    setSelectedMatch(match);
    setMatchDetailsOpen(true);
  };

  return (
    <YStack f={1} backgroundColor="$background">
      <Stack.Screen
        options={{
          header: () => (
            <View
              style={{
                backgroundColor: theme.background.val,
                borderBottomWidth: 1,
                borderBottomColor: isDark ? theme.gray8.val : theme.gray5.val,
              }}>
              <YStack paddingHorizontal="$4" paddingVertical="$2">
                {/* Location Row */}
                <XStack space="$2" alignItems="center" justifyContent="space-between">
                  <XStack flex={1} alignItems="center" space="$2">
                    <Ionicons name="location" size={20} color={theme.blue10.val} />
                    <XStack alignItems="center" space="$1">
                      <Text fontSize={18} fontWeight="bold" numberOfLines={1} color="$color">
                        {selectedLocation}
                      </Text>
                      <Ionicons name="chevron-down" size={18} color={theme.gray10.val} />
                    </XStack>
                  </XStack>
                  <Button
                    size="$3"
                    circular
                    icon={
                      <Ionicons name="person-circle-outline" size={24} color={theme.color.val} />
                    }
                    onPress={() => router.push('/modal')}
                    backgroundColor="transparent"
                  />
                </XStack>

                {/* Search Bar Section */}
                <XStack space="$2" alignItems="center" marginTop="$2">
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
                    icon={<Ionicons name="calendar-outline" size={24} color={theme.color.val} />}
                    onPress={() => setDateOpen(true)}
                    backgroundColor="transparent"
                  />
                </XStack>
              </YStack>
            </View>
          ),
        }}
      />
      
      {/* Add title for recent matches */}
      <YStack padding="$4">
        <Text fontSize="$5" fontWeight="bold" color="$color">Recent Matches</Text>
      </YStack>

      {/* Match Details Sheet */}
      <Sheet
        modal
        open={matchDetailsOpen}
        onOpenChange={setMatchDetailsOpen}
        snapPoints={[80]}
        dismissOnSnapToBottom
        zIndex={100000}>
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          backgroundColor="rgba(0,0,0,0.5)"
        />
        <Sheet.Frame
          padding="$4"
          backgroundColor={isDark ? '$gray1' : '$background'}
          borderTopLeftRadius="$10"
          borderTopRightRadius="$10">
          <Sheet.Handle backgroundColor={isDark ? '$gray8' : '$gray5'} />
          {selectedMatch && (
            <YStack space="$4">
              <XStack justifyContent="space-between" alignItems="center">
                <Text fontSize="$6" fontWeight="bold" color="$color">
                  {selectedMatch.location}
                </Text>
              </XStack>

              <YStack
                space="$4"
                backgroundColor={isDark ? '$gray2' : '$blue2'}
                padding="$4"
                borderRadius="$4"
                borderWidth={1}
                borderColor={isDark ? '$gray8' : '$blue4'}>
                <XStack space="$4" alignItems="center">
                  <XStack space="$2" alignItems="center">
                    <Ionicons name="calendar-outline" size={20} color={theme.blue10.val} />
                    <Text color="$gray11" fontSize="$4">
                      {selectedMatch.time}
                    </Text>
                  </XStack>
                  <XStack space="$2" alignItems="center">
                    <Ionicons name="people-outline" size={20} color={theme.blue10.val} />
                    <Text color="$gray11" fontSize="$4">
                      {selectedMatch.players}
                    </Text>
                  </XStack>
                </XStack>

                <XStack space="$4" alignItems="center">
                  <XStack space="$2" alignItems="center">
                    <Ionicons name="location-outline" size={20} color={theme.blue10.val} />
                    <Text color="$gray11" fontSize="$4">
                      {selectedMatch.distance}
                    </Text>
                  </XStack>
                  <XStack space="$2" alignItems="center">
                    <Ionicons name="trophy-outline" size={20} color={theme.blue10.val} />
                    <Text color="$gray11" fontSize="$4">
                      {selectedMatch.level}
                    </Text>
                  </XStack>
                </XStack>
              </YStack>

              <YStack space="$2">
                <Text fontSize="$5" fontWeight="bold" color="$color">
                  Organizer
                </Text>
                <XStack space="$2" alignItems="center">
                  <Avatar circular size="$4">
                    <Avatar.Image source={{ uri: selectedMatch.organizer.avatar }} />
                  </Avatar>
                  <YStack>
                    <Text fontSize="$4" fontWeight="bold" color="$color">
                      {selectedMatch.organizer.name}
                    </Text>
                    <Text color="$gray11">Match Organizer</Text>
                  </YStack>
                </XStack>
              </YStack>

              <YStack space="$2">
                <Text fontSize="$5" fontWeight="bold" color="$color">
                  Description
                </Text>
                <Text color="$gray11" fontSize="$4">
                  Join us for a friendly match! All skill levels are welcome. Please arrive 15
                  minutes before the start time.
                </Text>
              </YStack>

              <Button
                size="$4"
                theme="active"
                marginTop="$2"
                onPress={() => setMatchDetailsOpen(false)}>
                Join Match
              </Button>
            </YStack>
          )}
        </Sheet.Frame>
      </Sheet>

      {/* Location Selector Sheet */}
      <Sheet
        modal
        open={locationOpen}
        onOpenChange={setLocationOpen}
        snapPoints={[45]}
        dismissOnSnapToBottom
        zIndex={100000}>
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame
          padding="$4"
          backgroundColor={isDark ? '$gray1' : '$background'}
          borderTopLeftRadius="$10"
          borderTopRightRadius="$10">
          <Sheet.Handle backgroundColor={isDark ? '$gray8' : '$gray5'} />
          <YStack space="$4">
            <Text fontSize="$6" fontWeight="bold" color="$color">
              Select Location
            </Text>
            {locations.map((location) => (
              <Button
                key={location}
                size="$4"
                backgroundColor={
                  location === selectedLocation ? (isDark ? '$blue8' : '$blue2') : 'transparent'
                }
                onPress={() => {
                  setSelectedLocation(location);
                  setLocationOpen(false);
                }}>
                <Text
                  color={
                    location === selectedLocation ? (isDark ? '$color' : '$blue10') : '$color'
                  }>
                  {location}
                </Text>
              </Button>
            ))}
          </YStack>
        </Sheet.Frame>
      </Sheet>

      {/* Date Selector Sheet */}
      <Sheet
        modal
        open={dateOpen}
        onOpenChange={setDateOpen}
        snapPoints={[45]}
        dismissOnSnapToBottom
        zIndex={100000}>
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame
          padding="$4"
          backgroundColor={isDark ? '$gray1' : '$background'}
          borderTopLeftRadius="$10"
          borderTopRightRadius="$10">
          <Sheet.Handle backgroundColor={isDark ? '$gray8' : '$gray5'} />
          <YStack space="$4">
            <Text fontSize="$6" fontWeight="bold" color="$color">
              Select Date
            </Text>
            {dates.map((date) => (
              <Button
                key={date}
                size="$4"
                backgroundColor={
                  date === selectedDate ? (isDark ? '$blue8' : '$blue2') : 'transparent'
                }
                onPress={() => {
                  setSelectedDate(date);
                  setDateOpen(false);
                }}>
                <Text color={date === selectedDate ? (isDark ? '$color' : '$blue10') : '$color'}>
                  {date}
                </Text>
              </Button>
            ))}
          </YStack>
        </Sheet.Frame>
      </Sheet>

      <ScrollView style={{ zIndex: 1 }}>
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
              onPress={() => handleCardPress(match)}>
              <Card.Header padded>
                <XStack justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold" color="$gray12">
                    {match.location}
                  </Text>
                  <Text color="$green10" fontWeight="bold">
                    Available
                  </Text>
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
        onPress={() => {
          /* Add logic for creating new match */
        }}
      />
    </YStack>
  );
}
