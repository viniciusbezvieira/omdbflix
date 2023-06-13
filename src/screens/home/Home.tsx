import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useDebounce, useToggle } from '@uidotdev/usehooks';
import { getMovieListByTitle } from '../../services/movies';
import { Loading } from '../../components';
import { TitleCard } from './components';
import { Searchbar } from 'react-native-paper';
import { Title } from '../../models/title';

const Home = ({ navigation }) => {
  const [data, setData] = useState<Title[]>([]);
  const [search, setSearch] = useState('');
  const [loading, toggleLoading] = useToggle(false);
  const debouncedSearchTerm = useDebounce(search, 300);

  const clearSearch = () => {
    setData([]);
  };

  useEffect(() => {
    if (search.trim().length >= 3) {
      toggleLoading();
      getMovieListByTitle(search)
        .then(res => {
          toggleLoading();
          setData(res.data.Search);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <Searchbar
        placeholder="Busque por filmes, séries e episodios"
        onChangeText={text => setSearch(text)}
        onClearIconPress={clearSearch}
        value={search}
        style={styles.search}
      />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TitleCard
              data={item}
              onPress={() => navigation.navigate('TitleDetails', item)}
            />
          )}
          numColumns={2}
          keyExtractor={item => item.imdbID}
        />
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#EAEAEA',
    borderRadius: 0,
  },
});
