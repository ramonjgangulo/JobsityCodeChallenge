import { Dimensions, StyleSheet } from "react-native";

const searchInputWidth = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    width: searchInputWidth,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default styles;
