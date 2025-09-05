import { Tabs } from 'expo-router';
import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    const activeColor = 'white';
    const inactiveColor = 'white';
    const activeBg = '#494343ff';
    const inactiveBg = '#7e7c7cff';

    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: 'none' },
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

                    <Pressable onPress={() => props.navigation.navigate('index')}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor:
                                    props.state.routes[props.state.index].name === 'index'
                                        ? activeBg
                                        : inactiveBg,
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                source={require('../../assets/logo.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                resizeMode="cover"
                            />
                        </View>
                    </Pressable>

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
