import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAppStore } from '../store/useAppStore';

const AuthRedirectScreen = ({ navigation, route }: any) => {
  const { user } = useAppStore();

  useEffect(() => {
    if (user) {
      navigation.replace('Main');
    } else {
      navigation.replace('Login');
    }
  }, [navigation, user]);

  return <View style={{ flex: 1, backgroundColor: '#0000' }} />;
};

export default AuthRedirectScreen;
