import { StyleSheet, View, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

  const handlePress = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons 
        style={styles.icon}
        name='menu' 
        size={28}
        onPress={handlePress}
      />
      <View>
        <View>
          <Image
            source={require('../assets/gta.png')}
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  }
})
