import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import RootDrawer from './routes/RootDrawer';

export default function App() {
  const [loaded] = useFonts({
    UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}
