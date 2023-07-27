import { View } from "react-native";
// import HomePage from "./app/WebServices";
import AxiosService from "./app/Axios";

const MainApp = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <HomePage /> */}
      <AxiosService />
    </View>
  )
}

export default MainApp;