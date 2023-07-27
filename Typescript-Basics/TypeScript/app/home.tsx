import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Text, View } from 'react-native';

type HomeProps<T, U> = {
  counter: T;
  name: U;
  setCounter: Dispatch<SetStateAction<T>>;
  setName: Dispatch<SetStateAction<U>>;
};

const Home: FC<HomeProps<number, string>> = ({
  counter,
  setCounter,
  name,
  setName,
}) => {
  const performAction = (): void => {
    setCounter((pre) => pre + 1);
    setName('V');
  };

  return (
    <View>
      <Text>
        {counter} {name}
      </Text>
      <Button
        title='Click to Inc'
        onPress={performAction}
      />
    </View>
  );
};

export default Home;
