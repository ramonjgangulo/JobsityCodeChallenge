import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './ImageSquare.styles';
const DefaultImage = require('../../assets/Images/no-image-available.png');
//Created this component for the show squares since it's used on two screens
const ImageSquare = ({ image, title, id, navigation }) => {
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={() => { navigation.navigate('ShowDetails', {id, title}); }}>
      <Image source={image ? { uri: image } : DefaultImage} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ImageSquare
