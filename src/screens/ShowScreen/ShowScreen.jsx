import {useState, useEffect} from "react";
import { View, Image, Text, FlatList, SectionList, TouchableOpacity } from "react-native";
import styles from "./ShowScreen.styles";
import _ from 'underscore';
import { mapObject, removeTags } from '../../utils/utils';
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
const DefaultImage = require('../../assets/Images/no-image-available.png');

const ShowScreen = ({route, navigation}) => {
  const { id } = route.params;

  const showInitialValue = {
    title: '',
    genres: [],
    schedule: {},
    image: DefaultImage,
    summary: '',
  };

  const [show, setShow] = useState(showInitialValue);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then( (response) => response.json())
      .then( ({ name, genres, schedule, image, summary, _embedded }) => {
        setShow({
          title: name,
          genres: genres || [],
          schedule,
          image: image?.original ? {uri: image.original.toString()} : DefaultImage,
          summary,
        });
        return _embedded.episodes.map( ({name, number, season, id, image, summary }) => ({name, number, season, id, image, summary}));
      }).then((mappedEpisodes) => _.groupBy(mappedEpisodes, (item) => item.season))
      .then((groupedEpisodes) => mapObject(groupedEpisodes, (data, title) => ({title, data })))
      .then((parsedEpisodes) => {
        setEpisodes(parsedEpisodes);
        setLoading(false);
      });
  }, []);

  const renderEpisode = ({ item } ) => {
    return (
      <TouchableOpacity style={styles.episodeContainer} onPress={()=> navigation.navigate('EpisodeDetails', {episode: item})}>
        <Text style={styles.episodeNumber}>{`Episode ${item.number}: `}<Text style={styles.episodeTitle}>{item.name}</Text></Text>
      </TouchableOpacity>
    );
  }

  const renderSectionHeader = ( item ) => {
    return (
      <View style={styles.seasonHeader}>
        <Text style={styles.seasonTitle}>{`Season ${item.section.title}`}</Text>
      </View>
    );
  }
  const getAirDate = (schedule) => {
    if (!schedule?.days?.length && !schedule.time){
      return 'No current airing information'
    }
    return`${schedule?.days?.reduce((acc, day) => (`${acc}, ${day}`),'')} at ${schedule.time}`
  }

  const HeaderComponent = (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
          <Image source={show.image} style={styles.poster} />
      </View>
      <Text style={styles.title}>{show?.title}</Text>
      <Text style={styles.airDateTimeTag}>
        Air Date-Time: <Text style={styles.airDateTime}>{getAirDate(show?.schedule)}</Text>
      </Text>
      <View style={styles.genresContainer}>
        <Text style={styles.genresLabel}>Genres:</Text>
        <FlatList
          data={show?.genres}
          renderItem={({ item }) => <Text style={styles.genre}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          ListEmptyComponent={(
            <Text style={styles.genre}>No Genres listed</Text>
          )}
        />
      </View>
      <Text style={styles.summaryLabel}>Summary:</Text>
      <Text style={styles.summary}>{show.summary ? removeTags(show.summary) : 'No summary provided'}</Text>
    </View>
  );

  return (
    <>
      { loading ? (
        <LoaderComponent />
        ):
        (
          <SectionList
            sections={episodes}
            keyExtractor={({ number, season }, index) => `${index}-${number}-${season}`}
            renderItem={renderEpisode}
            renderSectionHeader={renderSectionHeader}
            ListHeaderComponent={HeaderComponent}
          />
        )
      }
    </>
  )
}

export default ShowScreen;
