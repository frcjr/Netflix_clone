import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (term) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${term}`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item.show} onPress={() => navigation.navigate('Details', { movie: item.show })} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
});

export default SearchScreen;
