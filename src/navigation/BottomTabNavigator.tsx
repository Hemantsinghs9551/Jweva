import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScene, LockScene, ProfileScene, WishlistScene } from '../scenes';
import { useAuth } from '../helpers/useAuth';
import { Text, View } from 'react-native';
import { FONT_SIZE } from '../constants/fonts';
import { tabBarOptions } from '../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

interface TabLabelProps {
  focused: boolean;
  color: string;
  label: string;
}

function TabLabel(props: TabLabelProps) {
  let { focused, color, label } = props;
  return (
    <View style={{ alignItems: 'center', marginTop: 5 }}>
      <Text
        {...(focused && { fontWeight: 'bold' })}
        style={{ color, fontSize: FONT_SIZE.extraSmall }}
      >
        {label}
      </Text>
    </View>
  );
}

function BottomTabNavigator() {
  let { authToken } = useAuth();
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      // activeColor="#e91e63"
      // barStyle={{ backgroundColor: '#ffff' }}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="HomeTab" component={HomeScene}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel focused={focused} color={focused ? "#e91e63" : color} label="Home" />
          ),
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="home" size={26} color={focused ? "#e91e63" : color} />
            // <IconButton buttonColor={"#ffff"} icon="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="WishlistTab" component={WishlistScene}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel focused={focused} color={focused ? "#e91e63" : color} label="Wishlist" />
          ),
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="cards-heart" size={26} color={focused ? "#e91e63" : color} />
          ),
        }}
      />
      <Tab.Screen name="ProfileTab" component={authToken ? ProfileScene : LockScene}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel focused={focused} color={focused ? "#e91e63" : color} label="Profile" />
          ),
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5 name="user-alt" size={26} color={focused ? "#e91e63" : color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
