import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Ícone ou Logo do App */}
        <View style={styles.logoContainer}>
          <View style={styles.iconCircle}>
            <Ionicons name="film" size={60} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Guia de Filmes e Séries</Text>
          <Text style={styles.version}>Versão 1.0.0</Text>
        </View>

        {/* Descrição */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sobre o App</Text>
          <Text style={styles.description}>
            Este aplicativo foi desenvolvido para ser o seu companheiro perfeito na hora de decidir o que assistir. Explore os lançamentos, descubra novas séries para maratonar e fique por dentro dos maiores destaques do cinema e da TV!
          </Text>
        </View>

        {/* Informações do Desenvolvedor */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Desenvolvimento</Text>
          <View style={styles.devInfo}>
            <Ionicons name="code-slash" size={20} color="#6A1B9A" />
            <Text style={styles.devText}>Criado com React Native & Expo</Text>
          </View>
          <View style={styles.devInfo}>
            <Ionicons name="color-palette" size={20} color="#6A1B9A" />
            <Text style={styles.devText}>Design Exclusivo</Text>
          </View>
        </View>

        {/* Botão de Voltar para a Home */}
        <TouchableOpacity 
          style={styles.botaoVoltar}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="arrow-back" size={20} color="#FFF" />
          <Text style={styles.textoBotaoVoltar}>Voltar para o Início</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEFA', // Nosso fundo padrão
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  iconCircle: {
    width: 120,
    height: 120,
    backgroundColor: '#D6C6F4', // Roxo do cabeçalho
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3, // Sombra leve no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C439E',
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: '#8A8A8A',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#655380',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#4A4A4A',
    lineHeight: 24,
    textAlign: 'justify',
  },
  devInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  devText: {
    fontSize: 15,
    color: '#4A4A4A',
    marginLeft: 10,
    fontWeight: '500',
  },
  botaoVoltar: {
    backgroundColor: '#6A1B9A', // Roxo escurão
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    width: '100%',
  },
  textoBotaoVoltar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});