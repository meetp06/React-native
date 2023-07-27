import { FlatList } from "react-native";
import globalArray from "../static/globalArray";
import Post from "./post";

// * App body component comprising of list of posts
const AppBody = () => {
    return (
        <FlatList
            data={globalArray}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                //* Individual Post component
                return <Post userImg={item.src} postImg={item.post} name={item.name} location={item.location} />
            }}
        />
    );
}

export default AppBody;