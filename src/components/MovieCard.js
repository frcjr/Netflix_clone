import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.image?.medium }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.summary} numberOfLines={3}>
          {movie.summary?.replace(/<[^>]+>/g, '')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  image: { width: 100, height: 150 },
  info: { flex: 1, padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  summary: { fontSize: 14, color: '#666' },
});

export default MovieCard;
