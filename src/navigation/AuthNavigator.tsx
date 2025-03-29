import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScene, ForgotPasswordScene, LockScene } from '../scenes';
import { COLORS } from '../constants/colors';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={LockScene}
        options={() => ({
          title: t("JWEVA"),
          headerTitleAlign: 'center', // Center the title
        })}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScene}
        options={() => ({
          title: t('Welcome'),
          headerStyle: {
            shadowColor: COLORS.transparent,
            elevation: 0,
          },
          headerTitleAlign: 'center', // Center the title
        })}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScene}
        options={() => ({
          title: t('Forgot Password'),
          cardStyle: {
            backgroundColor: COLORS.white,
          },
          headerTitleAlign: 'center', // Center the title
        })}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
