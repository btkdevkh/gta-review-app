import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Group 
        screenOptions={{ 
          headerStyle: {
            backgroundColor: 'papayawhip',
          }
        }}
      
      >
        <Stack.Screen 
          name="HomeStack" 
          component={Home} 
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
          }} 
        />
        <Stack.Screen 
          name="Details" 
          component={ReviewDetails} 
          options={{
            title: 'Review Details'
          }} 
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default HomeStack
