import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import EventDetailScreen from '../screens/admin/EventDetailScreen';
import CreateEventScreen from '../screens/admin/CreateEventScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyEventsScreen from '../screens/MyEventsScreen';
import { useAppStore } from '../store/useAppStore';

const RootStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const GuestTabs = () => (
  <BottomTab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string, string> = {
          Home: 'home-outline',
          Search: 'magnify',
          Login: 'login',
        };
        return <MaterialCommunityIcons name={icons[route.name] ?? 'circle'} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2563EB',
      tabBarInactiveTintColor: '#64748B',
    })}
  >
    <BottomTab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <BottomTab.Screen name="Search" component={SearchScreen} options={{ title: 'Cari Event' }} />
    <BottomTab.Screen name="Login" component={LoginScreen} options={{ title: 'Masuk' }} />
  </BottomTab.Navigator>
);

const AuthTabs = () => (
  <BottomTab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string, string> = {
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
    <BottomTab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <BottomTab.Screen name="MyEvents" component={MyEventsScreen} options={{ title: 'Event Saya' }} />
    <BottomTab.Screen name="Create" component={CreateEventScreen} options={{ title: 'Buat Event' }} />
    <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
  </BottomTab.Navigator>
);

export const RootNavigator = () => {
  const { user } = useAppStore();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Main" component={user ? AuthTabs : GuestTabs} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="EventDetail" component={EventDetailScreen} />
    </RootStack.Navigator>
  );
};
