import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, Text } from 'react-native';

import styles from "./SearchScreen.styles";

import ImageSquare from "../../components/ImageComponent/ImageSquare";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
        .then((response) => response.json())
        .then((shows) => shows.map(({ show }) => {return {image: show.image?.medium, title: show.name, id: show.id}} ))
        .then( (shows) => {
          setShows(shows);
          setLoading(false);
        });
  },[searchQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      { loading ?
        (
          <LoaderComponent />
        ):
        (
          <FlatList
            data={shows}
            renderItem={({ item }) => (<ImageSquare {...item} navigation={navigation} />)}
            numColumns={3}
          />
        )
      }
    </View>
  );
};

export default SearchScreen
