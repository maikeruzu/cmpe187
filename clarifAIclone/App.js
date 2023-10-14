import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//logo
const background = require('./assets/clarifaiLogo.jpg');


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgcontainer: {
    alignContent: 'center',
    
  },

  img: {

  },
});
