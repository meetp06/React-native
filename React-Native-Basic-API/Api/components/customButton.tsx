import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import CustomButtonStyle from "./customButtonStyle";

//* custom button
const CustomButton = memo(({ children, onPress }: any) => {

   return (
      <View style={CustomButtonStyle.container}>
         <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && CustomButtonStyle.pressed}
         >
            <Text style={CustomButtonStyle.innerText}>
               {children}
            </Text>
         </Pressable>
      </View >
   );
});


export default CustomButton;