import { Dimensions, StyleSheet } from "react-native";

const imageWidth = Dimensions.get('window').width / 3 - 20;
const imageHeight = Dimensions.get('window').width / 2 - 20;
const titleHeight = (Dimensions.get('window').width / 2 - 20) / 3.5;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
    borderRadius: 5,

  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: titleHeight,
    padding: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
