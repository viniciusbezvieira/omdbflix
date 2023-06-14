import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useDebounce, useCounter } from '@uidotdev/usehooks';
import { Searchbar } from 'react-native-paper';
import { TitleCard } from './components';
import { styles, GridDivisor } from './styles';
import { useSearchMoviesByTitle } from './useHome';

const Home: React.FC = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>('');
  const [searchPage, { increment, set }] = useCounter<number>(1);
  const debouncedSearch: string = useDebounce(search, 300);
  const [searchMoviesByTitle, setSearchMoviesByTitle] = useSearchMoviesByTitle({
    search: debouncedSearch,
    page: searchPage,
  });

  const clearData = () => {
    setSearchMoviesByTitle([]);
    set(1);
  };

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Busque por filmes, séries e episodios"
        onChangeText={text => setSearch(text)}
        onClearIconPress={clearData}
        value={search}
        style={styles.search}
      />
      <FlatList
        data={searchMoviesByTitle}
        renderItem={({ item, index }) => (
          <TitleCard
            index={index}
            data={item}
            onPress={() => navigation.navigate('TitleDetails', item)}
          />
        )}
        ItemSeparatorComponent={() => <GridDivisor />}
        numColumns={2}
        keyExtractor={(item, index) => `${item.imdbID}-${index}`}
        onEndReached={increment}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};

export default Home;
