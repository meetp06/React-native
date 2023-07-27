import { FC, useState } from 'react';
import { SafeAreaView } from 'react-native';
import NewHome from './NewHome';

const App: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('Initial');

  //* Main component
  return (
    <SafeAreaView>
      {/* <Home
        name={name}
        setName={setName}
        counter={counter}
        setCounter={setCounter}
      /> */}
      <NewHome />
    </SafeAreaView>
  );
};

export default App;
