import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './RootNavigation';

import TabBar from '../navigation/tabBar';

import Home from '../screens/home';
import Account from '../screens/account';
import Sepet from '../screens/sepet';
import favori from '../screens/favori';
import Settings from '../screens/settings';

const Stack = createStackNavigator();

function Main(){
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator
        initialRouteName="homescreen" 
        tabBar={props => <TabBar {...props} />}
        sceneContainerStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen name="Ana sayfa" component={Home} options={{unmountOnBlur: true}}  />
        <Tab.Screen name="Sepet" component={Sepet} options={{unmountOnBlur: true}}  />
        <Tab.Screen name="Favoriler" component={favori} options={{unmountOnBlur: true}}  />
        <Tab.Screen name="Hesap" component={Account} options={{unmountOnBlur: true}}  />
        <Tab.Screen name="Liste" component={Settings} options={{unmountOnBlur: true}}  />
    </Tab.Navigator>;
}

export default () => <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }}  />
    </Stack.Navigator>
</NavigationContainer>;