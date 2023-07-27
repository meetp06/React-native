import { createContext, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { CustomButton } from "./components/button";
import Body from "./components/dummy";

export const customContext = createContext(0);


function dummy() {
  //* Called every single time on render if passed as normal function
  const giveInit = () => {
    console.log('====================================');
    console.log("Inside init");
    console.log('====================================');
    return 4;
  }

  const giveRand = () => {
    console.log('====================================');
    console.log("Inside Rand");
    console.log('====================================');
    return Math.floor(Math.random() * 100);
  }


  const [state, setState] = useState(() => giveInit());

  useEffect(() => {
    console.log('====================================');
    console.log("Inside useffect");
    console.log('====================================');

    return () => {
      console.log('====================================');
      console.log("Did Unmount!");
      console.log('====================================');

    }
  },);

  /// * Ref 
  // const textInputRef = useRef(null);

  // const handleButtonClick = () => {

  //   if (textInputRef.current?.isFocused())
  //     textInputRef.current?.blur();

  //   else
  //     textInputRef.current?.focus();
  // };
}

const App = () => {

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(99);
  const [curHold, setCurHold] = useState(50);

  //* only will be called when start changes
  const value = useMemo(() => {
    console.log('====================================');
    console.log("Inside Primes", start);
    console.log('====================================');
    return start + end;
  }, [start]);


  const incrementCount = useCallback(() => {

    const middle = Math.floor((start + end) / 2);
    setCurHold(middle);
  }, []);


  const pointerIncrease = useCallback(() => {

    const val = Math.floor(Math.random() * 3);
    setStart(val);
    return;

    if (val < 50) {
      setStart(curHold + 1);
    } else {
      setEnd(curHold - 1);
    }
  }, []);

  const deep = "deep";


  ///* Useeffect
  useEffect(() => {
    console.log('====================================');
    console.log("Re render fired inside useEfect");
    console.log('====================================');
    // const middle = Math.floor((start + end) / 2);
    // setCurHold(middle);
  }, [pointerIncrease, incrementCount]);


  const id = useId();

  const onClick = () => {
    console.log('====================================');
    console.log("Inside on click", id);
    console.log('====================================');
  }

  return (
    <customContext.Provider value={1}>

      <View style={styles.root}>
        <Text>
          {` start is ${start}: end is ${end}: mid is ${curHold} ${value}`}
        </Text>

        <CustomButton children={"Change"} onPress={pointerIncrease} />
        <CustomButton children={"Callback"} onPress={incrementCount} />

        <View>
          <TextInput
            id={id}
            placeholder="Enter some text"
          />
          <Button title="Focus input" onPress={onClick} />
        </View>

        <Body myName={deep} />
      </View>

    </customContext.Provider>
  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});


export default App;