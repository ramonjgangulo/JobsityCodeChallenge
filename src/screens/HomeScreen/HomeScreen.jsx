import {useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles  from "./HomeScreen.styles";

const HomeScreen = ({navigation}) => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(navigation);
  useEffect( () => {
   fetch(`https://api.tvmaze.com/shows?page=${page}`)
     .then((response) => response.json())
     .then((shows) => shows.map(({ image,name, id },) => {return {image: image.medium, title: name, id}} ))
     .then( (shows) => {
       setShows((prevShows) => [...prevShows, ...shows]);
       setLoading(false);
     });
  },[page]);

  const handleEndReached = () => {
     if(!loading) {
       setLoading(true);
       setPage((prevPage) => prevPage + 1);
     }
  }

  const renderImageItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={shows}
          renderItem={renderImageItem}
          numColumns={3}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
  )
}

export default HomeScreen;
