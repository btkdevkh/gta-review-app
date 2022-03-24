import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../shared/Card'
import { globalStyles, images } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false)
  const [reviews, setReviews] = useState([
    { id: 1, title: 'GTA5 Bank', ratings: 2 },
    { id: 2, title: 'GTA5 Plan', ratings: 3 },
    { id: 3, title: 'GTA5 Car', ratings: 5 },
  ])

  const handleAdd = (review) => {
    review.id = Math.random().toString()
    setReviews(prevReview => ([...prevReview, review]))
    setShowModal(false)
  }

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={globalStyles.container}
    >


      <Modal visible={showModal}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close' 
              size={24}
              onPress={() => setShowModal(false)}
              style={{ ...styles.btnToggle, ...styles.btnClose }}
            />

            <ReviewForm handleAdd={handleAdd} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={24}
        onPress={() => setShowModal(true)}
        style={styles.btnToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}
          >
            <Card>
              <Text>{item.title}</Text>
              <View>
                <Image
                  source={images.ratings[item.ratings]}
                  style={{
                    resizeMode: "contain",
                    width: 100,
                    height: 20
                  }}
                />
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  btnToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 10,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10
  },
  btnClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})
