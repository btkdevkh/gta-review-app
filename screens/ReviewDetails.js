import { View, Text, Image } from 'react-native'
import Card from '../shared/Card'
import { globalStyles, images } from '../styles/global'

export default function ReviewDetails({ route }) {
  const { title, ratings } = route.params

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <View>
          <Image
            source={images.ratings[ratings]}
            style={{
              resizeMode: "contain",
              width: 100,
              height: 20
            }}
          />
        </View>
      </Card>
    </View>
  )
}
