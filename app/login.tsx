import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { YStack, Input, Button, Text, XStack, useTheme, H1, H3 } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const router = useRouter();
  const theme = useTheme();

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
      router.replace('/(tabs)');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <YStack f={1} backgroundColor="$background">
      {/* Header Section */}
      <YStack padding="$8" space="$2" marginTop="$8">
        <H1 textAlign="center" color="$blue10">Welcome Back!</H1>
        <H3 textAlign="center" color="$gray11">Sign in to your account</H3>
      </YStack>

      {/* Login Form */}
      <YStack 
        backgroundColor="$gray1" 
        flex={1} 
        marginTop="$4"
        borderTopLeftRadius="$10"
        borderTopRightRadius="$10"
        padding="$6"
        space="$4"
      >
        <YStack space="$4">
          {/* Email Input */}
          <YStack space="$2">
            <Text color="$gray11" fontSize="$3">Email Address</Text>
            <Input
              size="$4"
              placeholder="Enter your email"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              backgroundColor="$gray2"
              borderWidth={1}
              borderColor="$gray5"
              focusStyle={{ borderColor: '$blue8' }}
              leftElement={
                <Ionicons 
                  name="mail-outline" 
                  size={20} 
                  color={theme.gray10.val}
                  style={{ marginLeft: 12 }} 
                />
              }
            />
          </YStack>

          {/* Password Input */}
          <YStack space="$2">
            <Text color="$gray11" fontSize="$3">Password</Text>
            <Input
              size="$4"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              backgroundColor="$gray2"
              borderWidth={1}
              borderColor="$gray5"
              focusStyle={{ borderColor: '$blue8' }}
              leftElement={
                <Ionicons 
                  name="lock-closed-outline" 
                  size={20} 
                  color={theme.gray10.val}
                  style={{ marginLeft: 12 }} 
                />
              }
            />
          </YStack>

          {/* Forgot Password */}
          <XStack justifyContent="flex-end">
            <Text color="$blue10" fontWeight="bold" fontSize="$3">
              Forgot Password?
            </Text>
          </XStack>

          {/* Login Button */}
          <Button
            size="$4"
            theme="active"
            onPress={handleLogin}
            marginTop="$2"
            height={50}
            pressStyle={{ opacity: 0.8 }}
          >
            <Text color="white" fontWeight="bold">Sign In</Text>
          </Button>
        </YStack>

        {/* Sign Up Section */}
        <XStack justifyContent="center" space="$2" marginTop="$4">
          <Text color="$gray11">Don't have an account?</Text>
          <Text 
            color="$blue10" 
            fontWeight="bold"
            pressStyle={{ opacity: 0.7 }}
            onPress={() => {/* Add signup navigation */}}
          >
            Sign Up
          </Text>
        </XStack>
      </YStack>
    </YStack>
  );
} 