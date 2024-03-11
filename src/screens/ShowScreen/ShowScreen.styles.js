import {StyleSheet, Dimensions} from "react-native";
const imageWidth = (Dimensions.get('window').width / 3 ) * 2 - 20;
const imageHeight = (Dimensions.get('window').width / 2 ) * 2 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  posterContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  poster: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  airDateTimeTag: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  airDateTime: {
    fontWeight: '400',
  },
  genresContainer: {
    marginTop: 10,
  },
  genresLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    marginRight: 10,
  },
  summary: {
    fontSize: 16,
    marginTop: 10,
  },
  summaryLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  seasonHeader: {
    backgroundColor: '#eee',
    padding: 10,
  },
  seasonTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  episodeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  episodeNumber: {
    fontSize: 16,
    fontWeight: '400',
  },
  episodeTitle: {
    fontWeight: '200',
  }
});

export default styles;
