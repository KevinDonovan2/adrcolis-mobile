import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const activeColor = 'white';
  const inactiveColor = 'white';
  const activeBg = '#494343ff';
  const inactiveBg = '#7e7c7cff';

  return (
    <Tabs
      initialRouteName="index" // 👈 index devient la page de démarrage
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // On cache la tabBar par défaut
      }}
      tabBar={(props) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 70,
            paddingHorizontal: 40,
            backgroundColor: '#7e7c7cff',
            borderRadius: 30,
            marginHorizontal: 20,
            marginBottom: 20,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 6,
          }}
        >
          {/* Profil (nouvelle page) */}
          <Pressable onPress={() => props.navigation.navigate('profile')}>
            <View
              style={{
                backgroundColor:
                  props.state.routes[props.state.index].name === 'profile'
                    ? activeBg
                    : inactiveBg,
                borderRadius: 50,
                padding: 6,
              }}
            >
              <Ionicons
                name="person-circle-outline"
                size={30}
                color={
                  props.state.routes[props.state.index].name === 'profile'
                    ? activeColor
                    : inactiveColor
                }
              />
            </View>
          </Pressable>

          {/* Téléphone */}
          <Pressable onPress={() => props.navigation.navigate('explore')}>
            <View
              style={{
                backgroundColor:
                  props.state.routes[props.state.index].name === 'explore'
                    ? activeBg
                    : inactiveBg,
                borderRadius: 50,
                padding: 6,
              }}
            >
              <Ionicons
                name="call-outline"
                size={30}
                color={
                  props.state.routes[props.state.index].name === 'explore'
                    ? activeColor
                    : inactiveColor
                }
              />
            </View>
          </Pressable>
        </View>
      )}
    >
      <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil Utilisateur' }} />
      <Tabs.Screen name="explore" options={{ title: 'Téléphone' }} />
    </Tabs>
  );
}
