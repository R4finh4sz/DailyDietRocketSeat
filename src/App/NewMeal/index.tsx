import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function NewMealScreen() {
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nova Refeição</Text>
      <Text onPress={() => router.back()}>Voltar</Text>
    </View>
  );
}