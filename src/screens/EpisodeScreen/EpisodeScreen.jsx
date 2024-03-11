import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import styles from "./EpisodeScreen.styles";
import { removeTags } from "../../utils/utils";
const DefaultImage = require('../../assets/Images/no-image-available.png');

//Simple screen that shows Episode info, no https requests are needed
const EpisodeScreen = ({ route }) => {
  const { episode } = route.params; // Assume you pass the episode data as a navigation parameter

  return (
    <View style={styles.container}>
        <ScrollView>
          <Image source={episode?.image?.original ? {uri: episode?.image?.original} : DefaultImage} style={styles.image} />
          <Text style={styles.name}>{episode.name}</Text>
          <Text style={styles.episodeInfo}>{`Episode ${episode.number} - Season ${episode.season}`}</Text>
          <Text style={styles.summary}>{episode.summary?removeTags(episode.summary): 'No summary provided'}</Text>
      </ScrollView>
    </View>
  );
};

export default EpisodeScreen;
