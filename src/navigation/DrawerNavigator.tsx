import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../constants/colors';
import {

    HomeScene,
  ProductDetailsScene,

} from '../scenes';
import { DrawerParamList } from '../types/Navigation';
import Info from '../scenes/Info';


const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {

  return (

    <Drawer.Navigator drawerContent={(props: any) => <Info {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScene}
        options={{ title: 'Home', headerShown: false }}
      />
      <Drawer.Screen
        name="Info"
        component={Info}
        options={{
          title: 'Info',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetailsScene}
        options={({ navigation }) => ({
          title: t('Product Details')
    
        })}

      />

    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  headerButton: {
    marginRight: 8,
  },
  cartBadge: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 7,
    position: 'absolute',
    top: 5,
    right: 12,
  },
  badgeText: {
    fontSize: 10,
    color: COLORS.white,
  },
});
