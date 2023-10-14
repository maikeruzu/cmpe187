import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
//logo
const background = require('./assets/clarifaiLogo.png');


export default function App() {
  
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };



  return (
    <View style={styles.container}>

      <View style={styles.imgcontainer}>
        <ImageViewer 
        placeholderImageSource={background} 
        selectedImage={selectedImage} />
      </View>

      <View style={styles.butContainer}>
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },

  imgcontainer: {
    flex: 1,
    paddingTop: 40,
  },

  butContainer: {
    flex: 1 / 2.5,
    alignItems: 'center',
  },

  
});
