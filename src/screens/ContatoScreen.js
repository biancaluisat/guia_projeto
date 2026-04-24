import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContatoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerContainer}>
          <Ionicons name="chatbubbles" size={60} color="#D6C6F4" />
          <Text style={styles.title}>Fale Conosco</Text>
          <Text style={styles.subtitle}>
            Tem alguma sugestão, dúvida ou encontrou um bug? Manda uma mensagem pra gente!
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite seu nome" 
            placeholderTextColor="#A9A9A9"
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input} 
            placeholder="seu@email.com" 
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
          />

          <Text style={styles.label}>Mensagem</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Como podemos te ajudar?" 
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            placeholderTextColor="#A9A9A9"
          />

          <TouchableOpacity style={styles.botaoEnviar} activeOpacity={0.8}>
            <Ionicons name="send" size={18} color="#FFF" />
            <Text style={styles.textoBotaoEnviar}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.botaoVoltar}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="arrow-back" size={20} color="#6A1B9A" />
          <Text style={styles.textoBotaoVoltar}>Voltar para o Início</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEFA', 
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5C439E',
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: '#7A7A7A',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#655380',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9F5FC',
    borderWidth: 1,
    borderColor: '#E4D9F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    color: '#333',
    marginBottom: 15,
  },
  textArea: {
    height: 100,
  },
  botaoEnviar: {
    backgroundColor: '#6A1B9A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  textoBotaoEnviar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  textoBotaoVoltar: {
    color: '#6A1B9A',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});
