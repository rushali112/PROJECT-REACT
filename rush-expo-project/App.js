import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IPOCalendar from './components/IPOCalendar';
import CurrencyExchange from './components/CurrencyExchange';
import Login from './components/Login'; 
import Register from './components/Register'; 

const Stack = createStackNavigator();

const HomeScreen = () => (
  <>
    <IPOCalendar />
    <CurrencyExchange />
  </>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
