import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, FlatList, Image } from 'react-native';
import { Text, List } from 'react-native-paper';
import { getMovieById } from '../../services/movies';
import styled from 'styled-components/native';

const TitleDetails = ({ route }) => {
  const [data, setData] = useState({
    Plot: '...',
    Genre: '...',
    Director: '...',
    Writer: '...',
    Actors: '...',
  });
  const { imdbID, Title, Poster, Year } = route.params;

  const posterUri = {
    uri:
      Poster === 'N/A'
        ? 'https://placehold.co/200x275/404040/9f9f9f.png?text=No+Poster'
        : Poster,
  };

  useEffect(() => {
    getMovieById(imdbID)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={posterUri}
      blurRadius={10}>
      <Image style={styles.poster} source={posterUri} />
      <Content>
        <Text variant="titleLarge">{Title}</Text>
        <Text variant="labelSmall" style={styles.year}>
          {Year}
        </Text>
        <Text>{data.Plot}</Text>
        <FlatList
          data={[
            { title: 'Gênero', value: data.Genre },
            { title: 'Diretor(res)', value: data.Director },
            { title: 'Escritor(es)', value: data.Writer },
            { title: 'Elenco', value: data.Actors },
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
      </Content>
    </ImageBackground>
  );
};

export default TitleDetails;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: 295,
    alignItems: 'center',
  },
  year: {
    marginVertical: 8,
  },
  poster: {
    width: 220,
    height: 295,
  },
  titleStyle: {
    fontSize: 12,
  },
  descriptionStyle: {
    fontSize: 16,
  },
});

const Content = styled.View`
  background: #fff;
  width: 100%;
  padding: 12px;
`;
