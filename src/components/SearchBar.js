import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Movies..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={() => onSearch(searchTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fff' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10 },
});

export default SearchBar;
