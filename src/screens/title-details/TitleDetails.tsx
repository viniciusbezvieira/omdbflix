import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, Image } from 'react-native';
import { Text, List } from 'react-native-paper';
import { Loading } from '../../components';
import { styles, Content } from './styles';
import { useMovieById } from './useTitleDetails';

const TitleDetails: React.FC = ({ route }: any) => {
  const { imdbID, Poster } = route.params;
  const [loading, setLoading] = useState(true);
  const movie = useMovieById({
    imdbID: imdbID,
  });
  const posterUri = {
    uri: Poster,
  };

  useEffect(() => {
    setLoading(false);
  }, [movie]);

  return (
    <ImageBackground
      style={styles.background}
      source={posterUri}
      blurRadius={10}>
      <Image style={styles.poster} source={posterUri} />
      <Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Text variant="titleLarge">{movie.Title}</Text>
            <Text variant="labelSmall" style={styles.year}>
              {movie.Year}
            </Text>
            <Text>{movie.Plot}</Text>
            <FlatList
              data={[
                { title: 'Gênero', value: movie.Genre },
                { title: 'Diretor(res)', value: movie.Director },
                { title: 'Escritor(es)', value: movie.Writer },
                { title: 'Elenco', value: movie.Actors },
              ]}
              renderItem={({ item }) => (
                <List.Item
                  title={item.title}
                  description={item.value}
                  titleStyle={styles.titleStyle}
                  descriptionStyle={styles.descriptionStyle}
                  left={() => <List.Icon icon="folder" />}
                />
              )}
            />
          </>
        )}
      </Content>
    </ImageBackground>
  );
};

export default TitleDetails;
