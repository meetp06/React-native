import {ArrowBendUpLeft} from 'phosphor-react-native';
import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../theme';
import ApplicationStyle from '../../theme/ApplicationStyle';
import Color from '../../theme/Colors';
import styles from './PasswordModalStyles';

const PasswordModal = ({visible, onCancel, onSave}: any) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleCancel = () => {
    onCancel();
  };

  const handleSave = () => {
    onSave(currentPassword, newPassword);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
            <ArrowBendUpLeft
              size={moderateScale(25)}
              color={Color.BlueC}
              style={ApplicationStyle.iconPositionLeftSide}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Change Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry
            value={currentPassword}
            onChangeText={text => setCurrentPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PasswordModal;
