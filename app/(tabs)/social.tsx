import React from 'react';
import { ScrollView } from 'react-native';
import { YStack, XStack, Text, Avatar, Button, Card } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../context/theme';

// Mock data for activities
const ACTIVITIES = [
  {
    id: 1,
    type: 'match',
    user: {
      name: 'Alex Smith',
      avatar: 'https://www.placekittens.com/305/305',
    },
    action: 'won a match',
    details: 'Green Field Turf • 5v5',
    time: '2 hours ago',
    stats: '3 goals, 1 assist',
  },
  {
    id: 2,
    type: 'achievement',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://www.placekittens.com/304/304',
    },
    action: 'earned an achievement',
    details: 'Hat-trick Hero',
    time: '4 hours ago',
    stats: '3 goals in one match',
  },
  {
    id: 3,
    type: 'joined',
    user: {
      name: 'Mike Wilson',
      avatar: 'https://www.placekittens.com/302/302',
    },
    action: 'joined a match',
    details: 'Central Park Court',
    time: 'Tomorrow at 6 PM',
    stats: '7/10 players joined',
  },
];

// Mock data for upcoming matches
const UPCOMING_MATCHES = [
  {
    id: 1,
    location: 'Green Field Turf',
    time: 'Today, 7 PM',
    players: '8/10',
    organizer: {
      name: 'David',
      avatar: 'https://www.placekittens.com/301/301',
    },
  },
  {
    id: 2,
    location: 'Downtown Arena',
    time: 'Tomorrow, 6 PM',
    players: '6/10',
    organizer: {
      name: 'Emma',
      avatar: 'https://www.placekittens.com/300/300',
    },
  },
];

const SOCIAL_USERS = [
  {
    id: '1',
    name: 'Amit Verma',
    avatar: 'https://www.placekittens.com/400/400',
  },
  {
    id: '2',
    name: 'Priya Singh',
    avatar: 'https://www.placekittens.com/401/401',
  },
  {
    id: '3',
    name: 'Ravi Kumar',
    avatar: 'https://www.placekittens.com/402/402',
  },
  {
    id: '4',
    name: 'Sneha Patel',
    avatar: 'https://www.placekittens.com/403/403',
  },
];

const AvImage = ({ source }) => {
  const [loaded, setLoaded] = React.useState(false);

  const imgData = React.useMemo(() => {
    return {
      uri: source,
      cache: 'no-cache',
    };
  }, [source]);

  return <Avatar.Image source={imgData} onLoad={() => setLoaded(true)} />;
};

export default function SocialScreen() {
  const { colors } = useThemeContext();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <YStack padding="$4" space="$4">
        {/* Friends Section */}
        <YStack space="$2">
          <Text fontWeight="bold" fontSize="$5" color={colors.text}>
            Friends
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack space="$3" padding="$2">
              {/* Add Friend Button */}
              <YStack alignItems="center" space="$1">
                <Button
                  size="$5"
                  circular
                  icon={<Ionicons name="add" size={24} color={colors.primary} />}
                  backgroundColor={colors.card}
                  borderWidth={1.5}
                  borderColor={colors.border}
                />
                <Text fontSize="$2" color={colors.textMuted}>
                  Add
                </Text>
              </YStack>

              {/* Online Friends */}
              {SOCIAL_USERS.map((friend) => (
                <YStack key={friend.id} alignItems="center" space="$1">
                  <Avatar circular size="$5" borderWidth={2} borderColor={colors.primary}>
                    <AvImage source={friend.avatar} />
                  </Avatar>
                  <Text fontSize="$2" color={colors.textMuted}>
                    {friend.name}
                  </Text>
                </YStack>
              ))}
            </XStack>
          </ScrollView>
        </YStack>

        {/* Community Updates */}
        <YStack space="$2">
          <Text fontWeight="bold" fontSize="$5" color={colors.text}>
            Community Updates
          </Text>

          {ACTIVITIES.map((activity) => (
            <Card
              key={activity.id}
              backgroundColor={colors.card}
              borderRadius="$4"
              borderWidth={1.5}
              borderColor={colors.border}
              padding="$4"
              marginVertical="$2">
              <XStack space="$3" alignItems="center">
                <Avatar circular size="$4">
                  <Avatar.Image source={{ uri: activity.user.avatar }} />
                </Avatar>
                <YStack flex={1} space="$1">
                  <XStack space="$1" flexWrap="wrap">
                    <Text fontWeight="bold" color={colors.text}>
                      {activity.user.name}
                    </Text>
                    <Text color={colors.textMuted}>{activity.action}</Text>
                  </XStack>
                  <Text fontSize="$3" color={colors.primary}>
                    {activity.details}
                  </Text>
                  <XStack space="$4" marginTop="$1">
                    <XStack space="$1" alignItems="center">
                      <Ionicons name="time-outline" size={14} color={colors.textMuted} />
                      <Text fontSize="$2" color={colors.textMuted}>
                        {activity.time}
                      </Text>
                    </XStack>
                    {activity.stats && (
                      <XStack space="$1" alignItems="center">
                        <Ionicons name="stats-chart-outline" size={14} color={colors.textMuted} />
                        <Text fontSize="$2" color={colors.textMuted}>
                          {activity.stats}
                        </Text>
                      </XStack>
                    )}
                  </XStack>
                </YStack>
              </XStack>
            </Card>
          ))}
        </YStack>

        {/* Upcoming Matches */}
        <YStack space="$2">
          <Text fontWeight="bold" fontSize="$5" color={colors.text}>
            Upcoming Matches
          </Text>

          {UPCOMING_MATCHES.map((match) => (
            <Card
              key={match.id}
              backgroundColor={colors.card}
              borderRadius="$4"
              borderWidth={1.5}
              borderColor={colors.border}
              padding="$4"
              marginVertical="$2"
              pressStyle={{ scale: 0.98 }}>
              <XStack justifyContent="space-between" alignItems="center">
                <YStack space="$2">
                  <Text fontWeight="bold" color={colors.text}>
                    {match.location}
                  </Text>
                  <XStack space="$4">
                    <XStack space="$1" alignItems="center">
                      <Ionicons name="time-outline" size={16} color={colors.primary} />
                      <Text color={colors.textMuted}>{match.time}</Text>
                    </XStack>
                    <XStack space="$1" alignItems="center">
                      <Ionicons name="people-outline" size={16} color={colors.primary} />
                      <Text color={colors.textMuted}>{match.players}</Text>
                    </XStack>
                  </XStack>
                </YStack>
                <Avatar circular size="$4">
                  <Avatar.Image source={{ uri: match.organizer.avatar }} />
                </Avatar>
              </XStack>
            </Card>
          ))}
        </YStack>
      </YStack>
    </ScrollView>
  );
}
