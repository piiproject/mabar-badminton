import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LanguageSettingsScreen from '../screens/LanguageSettingsScreen';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import EventDetailScreen from '../screens/admin/EventDetailScreen';
import CreateEventScreen from '../screens/admin/CreateEventScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyEventsScreen from '../screens/MyEventsScreen';
import { useAppStore } from '../store/useAppStore';
import { useAppTheme } from '../theme/baseStyles';

const RootStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const GuestTabs = () => {
  const { t } = useAppTheme();

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, React.ComponentProps<typeof MaterialCommunityIcons>['name']> = {
            Home: 'home-outline',
            Login: 'login',
          };
          return <MaterialCommunityIcons name={icons[route.name] ?? 'circle'} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} options={{ title: t.tabs.home }} />
      <BottomTab.Screen name="Login" component={LoginScreen} options={{ title: t.tabs.login }} />
    </BottomTab.Navigator>
  );
};

const AuthTabs = () => {
  const { t } = useAppTheme();

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, React.ComponentProps<typeof MaterialCommunityIcons>['name']> = {
            Home: 'home-outline',
            MyEvents: 'calendar-check',
            Create: 'plus-box',
            Profile: 'account-circle',
          };
          return <MaterialCommunityIcons name={icons[route.name] ?? 'circle'} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} options={{ title: t.tabs.home }} />
      <BottomTab.Screen name="MyEvents" component={MyEventsScreen} options={{ title: t.tabs.myEvents }} />
      <BottomTab.Screen name="Create" component={CreateEventScreen} options={{ title: t.tabs.create }} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ title: t.tabs.profile }} />
    </BottomTab.Navigator>
  );
};

export const RootNavigator = () => {
  const { user } = useAppStore();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Main" component={user ? AuthTabs : GuestTabs} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
      <RootStack.Screen name="EventDetail" component={EventDetailScreen} />
    </RootStack.Navigator>
  );
};
