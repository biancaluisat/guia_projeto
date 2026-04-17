import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  ImageBackground, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

import data from '../data/dados.json'; 

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {

  const destaques = data.filter(item => item.id === 1 || item.id === 2); 

  const recomendados = data.filter(item => item.id === 4 || item.id === 5);

  const principal = data.find(item => item.id === 3);

  const CardFilme = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { item })}
    >
      <Image source={{ uri: item.imagem }} style={styles.cardImage} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Text style={styles.sectionTitle}>Destaques</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {destaques.map(item => <CardFilme key={item.id} item={item} />)}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recomendados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {recomendados.map(item => <CardFilme key={item.id} item={item} />)}
      </ScrollView>

      <Text style={styles.sectionTitle}>Destaque da Semana</Text>
      <TouchableOpacity 
        style={styles.bannerContainer}
        onPress={() => navigation.navigate('Detalhes', { item: principal })}
      >
        <ImageBackground 
          source={{ uri: principal?.imagem }} 
          style={styles.bannerImage}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.overlay}>
             <Text style={styles.bannerTitle}>{principal?.nome}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  horizontalScroll: {
    paddingLeft: 15,
  },
  card: {
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
    elevation: 5,
  },
  cardImage: {
    width: 160,
    height: 100,
    resizeMode: 'cover',
  },
  bannerContainer: {
    margin: 15,
    height: 200,
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  }
});