import {useEffect, useState, useCallback} from 'react';
import { SafeAreaView, View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles  from "./HomeScreen.styles";

import ImageSquare from "../../components/ImageComponent/ImageSquare";
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent';

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

        if(page === 0) setShows(shows);
        else setShows((prevShows) => [...prevShows, ...shows]);

        setLoading(false);
      });
  }

  useEffect( () => {
    fetchData();
  },[page]);

  const handleEndReached = () => {
     if(!loading) {
       setLoading(true);
       setPage((prevPage) => prevPage + 1);
     }
  }
  const handleRefresh = () => {
    setLoading(true);
    if(page === 0) fetchData();
    else setPage(0);
  }

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
