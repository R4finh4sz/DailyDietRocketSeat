import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f0f0f0', // Cor de fundo suave
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
