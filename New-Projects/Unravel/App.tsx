import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGame from "./screens/startGame";
import LinearGradient from 'react-native-linear-gradient';
import { useState } from "react";
import OnGame from "./screens/onGame";
import GameOver from "./screens/endGame";

export default function App() {

  const [curNumber, setcurNumber] = useState('');
  const [isGameOver, setGameOver] = useState(false);
  const [trial, setTrail] = useState(0);

  const pickNumberHandler = (val: any) => {
    setcurNumber(val);
  }

  const gameOverHandler = (val: any) => {
    setGameOver(true);
    setTrail(val);
  }

  const restartGame = () => {
    setcurNumber('');
    setGameOver(false);
    setTrail(0);
  }

  let screen = <StartGame onDone={pickNumberHandler} />;

  if (curNumber) {
    screen = <OnGame userNum={curNumber} gameOverCall={gameOverHandler} />
  }

  if (isGameOver) {
    screen = <GameOver onRestart={restartGame} userNum={curNumber} roundNum={trial} />
  }

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.rootView}>

      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode='cover'
        style={styles.rootView}
        imageStyle={styles.backgroundImage}
      >

        <SafeAreaView>
          {screen}
        </SafeAreaView>

      </ImageBackground>

    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.25,
  },
});