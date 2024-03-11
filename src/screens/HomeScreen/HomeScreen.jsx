import {useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import styles  from "./HomeScreen.styles";

import ImageSquare from "../../components/ImageComponent/ImageSquare";

const HomeScreen = ({navigation}) => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/shows?page=${page}`)
      .then((response) => response.json())
      .then((shows) => shows.map(({ image,name, id },) => {return {image: image?.medium, title: name, id}} ))
      .then( (shows) => {
        // if page is 0, add only the requested shows to get rid of old data
        if(page === 0) setShows(shows);
        //Adds new requested shows on top of previous added shows
        else setShows((prevShows) => [...prevShows, ...shows]);

        setLoading(false);
      });
  }
  // should run each time the page is updated
  useEffect( () => {
    fetchData();
  },[page]);
  // Triggers each time the users gets to the buttom of the list
  const handleEndReached = () => {
     if(!loading) {
       setLoading(true);
       setPage((prevPage) => prevPage + 1);
     }
  }
  // expected to trigger each time a pull refresh is done
  const handleRefresh = () => {
    setLoading(true);
    if(page === 0) fetchData();
    else setPage(0);
  }
  // SafeAreaView not necessary for android but is for ios
  // Flatlist takes care of adding loaders if you give it the right props
  return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={shows}
          renderItem={({item}) => (<ImageSquare {...item} navigation={navigation} />)}
          numColumns={3}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          onRefresh={handleRefresh}
          refreshing={loading}
        />
      </SafeAreaView>
  )
}

export default HomeScreen;
