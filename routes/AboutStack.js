import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About'
import Header from '../shared/Header';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Group 
        screenOptions={{ 
          headerStyle: { 
            backgroundColor: 'papayawhip' 
          }
        }}
      >
        <Stack.Screen 
          name="AboutStack" 
          component={About} 
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='About GameZone' />
            }
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AboutStack
