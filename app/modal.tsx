import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Avatar, Button, H2, ScrollView, Text, XStack, YStack, useTheme } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function ProfileModal() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <YStack f={1} backgroundColor="$background">
      <ScrollView>
        {/* Profile Info */}
        <YStack padding="$4" alignItems="center" space="$4">
          <Avatar circular size="$12">
            <Avatar.Image source={{ uri: 'https://placekitten.com/200/200' }} />
            <Avatar.Fallback backgroundColor="$blue8" />
          </Avatar>
          
          <YStack alignItems="center" space="$2">
            <H2 color="$color">John Doe</H2>
            <Text color="$gray11">@johndoe</Text>
          </YStack>

          <XStack space="$2">
            <Button 
              icon={<Ionicons name="pencil-outline" size={20} color={theme.color.val} />}
              backgroundColor="$gray2"
              borderWidth={1}
              borderColor="$gray5"
            >
              Edit Profile
            </Button>
            <Button 
              icon={<Ionicons name="share-outline" size={20} color={theme.color.val} />}
              backgroundColor="$gray2"
              borderWidth={1}
              borderColor="$gray5"
            >
              Share Profile
            </Button>
          </XStack>
        </YStack>

        {/* Stats */}
        <XStack justifyContent="space-around" padding="$4">
          <YStack alignItems="center" space="$1">
            <Text fontSize="$6" fontWeight="bold" color="$blue10">42</Text>
            <Text color="$gray11">Matches</Text>
            <Text fontSize="$2" color="$gray10">Played</Text>
          </YStack>
          <YStack alignItems="center" space="$1">
            <Text fontSize="$6" fontWeight="bold" color="$green10">28</Text>
            <Text color="$gray11">Wins</Text>
            <Text fontSize="$2" color="$gray10">67% ratio</Text>
          </YStack>
          <YStack alignItems="center" space="$1">
            <Text fontSize="$6" fontWeight="bold" color="$yellow10">4.8</Text>
            <Text color="$gray11">Rating</Text>
            <Text fontSize="$2" color="$gray10">32 reviews</Text>
          </YStack>
        </XStack>

        {/* Recent Activity */}
        <YStack padding="$4" space="$4">
          <Text fontWeight="bold" fontSize="$5" color="$color">Recent Activity</Text>
          
          {/* Match History Card */}
          <YStack 
            backgroundColor="$blue2" 
            borderRadius="$4" 
            borderWidth={1} 
            borderColor="$blue4" 
            padding="$4" 
            space="$2"
          >
            <XStack justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" color="$color">Green Field Turf</Text>
              <Text color="$green10" fontWeight="bold">Won</Text>
            </XStack>
            
            <XStack space="$4" alignItems="center">
              <XStack space="$2" alignItems="center">
                <Ionicons name="calendar-outline" size={16} color={theme.blue10.val} />
                <Text color="$gray11">Yesterday</Text>
              </XStack>
              <XStack space="$2" alignItems="center">
                <Ionicons name="football-outline" size={16} color={theme.blue10.val} />
                <Text color="$gray11">5v5</Text>
              </XStack>
              <XStack space="$2" alignItems="center">
                <Ionicons name="trophy-outline" size={16} color={theme.blue10.val} />
                <Text color="$gray11">MVP</Text>
              </XStack>
            </XStack>

            <XStack space="$2" alignItems="center" marginTop="$1">
              <Avatar circular size="$2">
                <Avatar.Image source={{ uri: 'https://placekitten.com/100/100' }} />
              </Avatar>
              <Text color="$gray11" fontSize="$2">Played with Alex, Mike, and 7 others</Text>
            </XStack>
          </YStack>
        </YStack>
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </YStack>
  );
}

export default ProfileModal;
