import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  episodeInfo: {
    fontSize: 16,
    marginTop: 5,
  },
  summary: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default styles;
