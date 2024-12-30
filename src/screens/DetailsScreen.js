import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.original }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary?.replace(/<[^>]+>/g, '')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  image: { width: '100%', height: 300, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  summary: { fontSize: 16, lineHeight: 22 },
});

export default DetailsScreen;
