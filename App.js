import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import FilmesScreen from './src/screens/FilmesScreen';
import SeriesScreen from './src/screens/SeriesScreen'; 
import DetalhesScreen from './src/screens/DetalhesScreen'; 
import SobreScreen from './src/screens/SobreScreen'; 
import ContatoScreen from './src/screens/ContatoScreen'; 

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TelaInicial"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8E73B9',
        tabBarInactiveTintColor: '#8A8A8A',
        tabBarActiveBackgroundColor: '#DCD0EF', 
        tabBarItemStyle: {
          borderRadius: 15, 
          marginHorizontal: 10, 
          marginVertical: 5,
          paddingVertical: 5,
        },
        tabBarStyle: { 
          backgroundColor: '#E8DEF8', 
          height: 80, 
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: -5,
        }
      }}
    >
      <Tab.Screen 
        name="TelaInicial" 
        component={HomeScreen} 
        options={{ 
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' } 
        }}
      />
      <Tab.Screen 
        name="Filmes" 
        component={FilmesScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="film" size={24} color={color} />
        }}
      />
      <Tab.Screen 
        name="Séries" 
        component={SeriesScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="tv" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#D6C6F4', 
            elevation: 0, 
            shadowOpacity: 0,
            height: 90, 
          },
          headerTitle: "Guia de Filmes e Séries",
          headerTitleAlign: 'left', 
          headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: -15, 
          },
          headerTintColor: '#FFFFFF', 
          drawerActiveTintColor: '#6A1B9A',
          drawerStyle: { backgroundColor: '#F5EEFA', width: 240 },
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{
            drawerLabel: 'Início',
            drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />
          }}
        />
        <Drawer.Screen 
          name="Sobre" 
          component={SobreScreen} 
          options={{
            drawerIcon: ({ color }) => <Ionicons name="information-circle-outline" size={22} color={color} />
          }}
        />
        <Drawer.Screen 
          name="Contato" 
          component={ContatoScreen} 
          options={{
            drawerIcon: ({ color }) => <Ionicons name="mail-outline" size={22} color={color} />
          }}
        />
        <Drawer.Screen 
          name="Detalhes" 
          component={DetalhesScreen} 
          options={{
            headerShown: false, 
            drawerItemStyle: { display: 'none' } 
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
