import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';


//logo
const background = require('./assets/clarifaiLogo.png');


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image source={background} style={styles.img} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgcontainer: {
    flex: 1,
    paddingTop: 50,
  },

  img: {
    width: 'auto',
    height: 500,
    borderRadius: 20,
  },
});
