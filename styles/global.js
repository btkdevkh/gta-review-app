import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: 'UbuntuRegular',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 5
  },
  error: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
  }
})

const images = {
  ratings: {
    '1': require('../assets/gta-1.jpg'),
    '2': require('../assets/gta-2.jpg'),
    '3': require('../assets/gta-3.jpg'),
    '4': require('../assets/gta-4.jpg'),
    '5': require('../assets/gta-5.jpg'),
  }
}

export { globalStyles, images }
