import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './ImageSquare.styles';
const DefaultImage = require('../../assets/Images/no-image-available.png');
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
