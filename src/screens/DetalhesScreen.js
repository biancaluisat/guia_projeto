import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetalhesScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imagem }} style={styles.capaGigante} />
          
          <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.subtitulo}>{item.subtitulo}</Text>

          <TouchableOpacity style={styles.botaoAssistir} activeOpacity={0.8}>
            <Ionicons name="play" size={20} color="#FFF" />
            <Text style={styles.textoBotaoAssistir}>Assistir Agora</Text>
          </TouchableOpacity>

          <Text style={styles.sessaoTitulo}>Sinopse</Text>
          <Text style={styles.sinopse}>
            SINOPSE DE {item.titulo}...
          </Text>

          <Text style={styles.sessaoTitulo}>Ficha Técnica</Text>
          <View style={styles.placeholderBarraLarga} />
          <View style={styles.placeholderBarraCurta} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEFA', 
  },
  imageContainer: {
    position: 'relative',
  },
  capaGigante: {
    width: '100%',
    height: 400, 
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  botaoVoltar: {
    position: 'absolute',
    top: 50, 
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 10,
    borderRadius: 20,
  },
  infoContainer: {
    padding: 20,
    marginTop: -20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5C439E',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#7A7A7A',
    marginBottom: 20,
    fontWeight: '500',
  },
  botaoAssistir: {
    backgroundColor: '#6A1B9A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 25,
  },
  textoBotaoAssistir: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sessaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#655380',
    marginBottom: 10,
  },
  sinopse: {
    fontSize: 15,
    lineHeight: 24,
    color: '#4A4A4A',
    marginBottom: 25,
  },
  placeholderBarraLarga: {
    height: 10,
    backgroundColor: '#E4D9F6', 
    borderRadius: 5,
    marginBottom: 10,
    width: '100%', 
  },
  placeholderBarraCurta: {
    height: 10,
    backgroundColor: '#E4D9F6',
    borderRadius: 5,
    width: '50%', 
  }
});
