//* using props

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const UseEffectVar = (props: any) => {
  const [data, setData] = useState(props.data);
  console.log("outer layer...");

  useEffect(() => {
    console.warn('Data updated:', data);
  }, [data]);

  return (
    <View>
      <Text style={{ fontSize: 40, margin: 70, }}>{data}</Text>
      <Button title='Tap on Button' onPress={() => setData(data + 10)} />
    </View>
  );
}

export default UseEffectVar;

//* using function

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// const UseEffectVar = () => {
//   const [data, setData] = useState(10);
//   console.log("outer layer...");

//   useEffect(() => {
//     setData(data);
//     console.warn('Data updated:', data);
//   }, [data]);

//   return (
//     <View>
//       <Text style={{ fontSize: 30, margin: 60, }}>{data}</Text>
//       <Button title='Tap on Button' onPress={() => setData(data + 10)} />
//     </View>
//   );
// }

// export default UseEffectVar;