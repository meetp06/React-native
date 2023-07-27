//*Main file is Here: App.tsx

import React from 'react';
import { View, Dimensions } from "react-native";
import HeaderPart from '../React_Native_Assignment/components/headerPart';
import BodyPart from '../React_Native_Assignment/components/bodyPart';

export default function PhotoBayApp() {
  return (

    <View>

      <HeaderPart />
      <BodyPart />

    </View>

  )
}