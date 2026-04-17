import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import filmes from '../data/filmes.json'; 

export default function FilmesScreen({ navigation }) {
  
  const renderFilme = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Detalhes', { item })} 
    >
      <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.subtitulo}>{item.subtitulo}</Text>
        
        {/* Barrinhas decorativas (Placeholders) da sua imagem */}
        <View style={styles.placeholderBarraLarga} />
        <View style={styles.placeholderBarraLarga} />
        <View style={styles.placeholderBarraCurta} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho Personalizado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoVoltar}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filmes</Text>
      </View>

      {/* Lista de Filmes */}
      <FlatList
        data={filmes}
        keyExtractor={item => item.id}
        renderItem={renderFilme}
        contentContainerStyle={styles.listaConfig}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA', 
  },
  header: {
    backgroundColor: '#D1C4E9', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingTop: 10, 
  },
  botaoVoltar: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listaConfig: {
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FAF8F5', 
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemCapa: {
    width: 100,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5E35B1', 
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: '#424242',
    marginBottom: 12,
  },
  placeholderBarraLarga: {
    height: 8,
    backgroundColor: '#D1C4E9',
    borderRadius: 4,
    marginBottom: 6,
    width: '95%',
  },
  placeholderBarraCurta: {
    height: 8,
    backgroundColor: '#D1C4E9',
    borderRadius: 4,
    width: '60%',
  }
});