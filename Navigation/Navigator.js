import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import NewOverviwe from '../screens/NewOverviwe';
import HomeScreen from '../screens/Home';
import NewsDetail from '../screens/NewsDetail';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Create a stack navigator for the Home tab
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} options={{ title: 'News Detail' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} 
        />
        <Tab.Screen 
          name="NewOverviwe" 
          component={NewOverviwe} 
          options={{
            tabBarLabel: 'New Overview',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="newspaper" color={color} size={26} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
