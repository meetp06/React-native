import {useFormik} from 'formik';
import {SkipBack} from 'phosphor-react-native';
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {Regex} from '../../constants';
import {YupStrings} from '../../utils';
import styles from './UserModalStyles';
const CreateUserModal = ({modalVisible, setModalVisible}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(YupStrings.FieldError.email)
      .matches(Regex.Email, 'Email is not valid')
      .email(),
    firstName: Yup.string()
      .required(YupStrings.FieldError.firstName)
      .min(2, YupStrings.MinCharError.firstName)
      .max(15, YupStrings.MaxCharError.firstName),
    lastName: Yup.string()
      .required(YupStrings.FieldError.lastName)
      .min(2, YupStrings.MinCharError.lastName)
      .max(15, YupStrings.MaxCharError.lastName),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
    onSubmit() {
      setModalVisible(false);
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <Modal
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.backView}>
                <TouchableOpacity onPress={() => handleSubmit()}>
                  <SkipBack size={(moderateScale = 22)} weight="fill" />
                </TouchableOpacity>
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChangeText={formik.handleChange('firstName')}
                  onBlur={formik.handleBlur('firstName')}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <Text style={styles.errorText}>
                    {formik.errors.firstName}
                  </Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChangeText={formik.handleChange('lastName')}
                  onBlur={formik.handleBlur('lastName')}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <Text style={styles.errorText}>{formik.errors.lastName}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={formik.values.email}
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                />
                {formik.errors.email && formik.touched.email ? (
                  <Text style={styles.errorText}>{formik.errors.email}</Text>
                ) : null}
                <TouchableOpacity
                  style={styles.button}
                  onPress={formik.handleSubmit}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default CreateUserModal;
