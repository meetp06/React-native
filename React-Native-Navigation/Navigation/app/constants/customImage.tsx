import { Image } from 'react-native';

const customImage = ({ src }: any) => {
    return (
        <Image
            style={{
                marginLeft: 10,
                height: 30,
                width: 30,
            }}
            source={src}
        />
    );
};

export default customImage;
