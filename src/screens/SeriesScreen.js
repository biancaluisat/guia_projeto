import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import series from '../data/series.json'; // Importando nosso novo JSON

export default function SeriesScreen({ navigation }) {
  
  const renderSerie = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Detalhes', { item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.subtitulo} numberOfLines={1}>{item.subtitulo}</Text>
        
        {/* Barrinhas decorativas alinhadas */}
        <View style={styles.placeholderBarraLarga} />
        <View style={styles.placeholderBarraLarga} />
        <View style={styles.placeholderBarraCurta} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Usando navigation.navigate para forçar a volta à TelaInicial caso precise */}
        <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')} style={styles.botaoVoltar}>
          <Ionicons name="arrow-back" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Séries</Text>
      </View>

      <FlatList
        data={series}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSerie}
        contentContainerStyle={styles.listaConfig}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// Mantendo os estilos idênticos e alinhados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E0F2', 
  },
  header: {
    backgroundColor: '#D6C6F4', 
    flexDirection: 'row',
    alignItems: 'center', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingTop: 10, 
  },
  botaoVoltar: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2, 
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listaConfig: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', 
    borderRadius: 20, 
    marginBottom: 15,
    padding: 12,
  },
  imagemCapa: {
    width: 110,
    height: 130,
    borderRadius: 16, 
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C439E', 
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#4A4A4A',
    marginBottom: 12,
  },
  placeholderBarraLarga: {
    height: 8,
    backgroundColor: '#E4D9F6', 
    borderRadius: 4,
    marginBottom: 6,
    width: '100%', 
  },
  placeholderBarraCurta: {
    height: 8,
    backgroundColor: '#E4D9F6',
    borderRadius: 4,
    width: '60%', 
  }
});