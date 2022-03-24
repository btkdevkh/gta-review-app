import { View, TextInput, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/Button'

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  ratings: yup.string()
    .required()
    .test('is-1-5', 'Ratings must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0
    }),
})

export default function ReviewForm({ handleAdd }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          ratings: ''
        }}
        validationSchema={reviewSchema}
        onSubmit={(value, actions) => {
          actions.resetForm()
          handleAdd(value)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.error}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Review ratings'
              onChangeText={props.handleChange('ratings')}
              value={props.values.ratings}
              keyboardType='numeric'
              onBlur={props.handleBlur('ratings')}
            />
            <Text style={globalStyles.error}>{props.touched.ratings && props.errors.ratings}</Text>

            <FlatButton
              text='Submit'
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}
