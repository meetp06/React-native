import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './CustomButtonStyles';

/*
 * Custom Button component
 *
 * @param {title} - the name of button.
 * @param {onPress} - onPress function.
 * @return - custom button.
 */

const CustomButton = memo(({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}>
        <Text style={styles.innerText}>{title}</Text>
      </Pressable>
    </View>
  );
});

export default CustomButton;
