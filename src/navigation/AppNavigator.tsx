import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../helpers/useAuth';
import StackNavigator from './StackNavigator';
import AuthNavigator from './AuthNavigator';
import { ActivityIndicator } from 'react-native';

export default function AppNavigator() {
  let { authToken } = useAuth();
  // if (authToken === "" || authToken == null) {
  //   return <ActivityIndicator />
  // }
  return (
    <NavigationContainer>
      {authToken ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
