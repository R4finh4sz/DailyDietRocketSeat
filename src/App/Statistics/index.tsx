import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function StatisticsScreen() {
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Estatísticas</Text>
      <Text onPress={() => router.back()}>Voltar</Text>
    </View>
  );
}