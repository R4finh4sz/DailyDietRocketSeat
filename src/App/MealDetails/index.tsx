import { View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function MealDetailsScreen() {
  const { mealId } = useLocalSearchParams<{ mealId?: string }>();
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalhes da Refeição</Text>
      {mealId && <Text>ID: {mealId}</Text>}
      <Text onPress={() => router.back()}>Voltar</Text>
    </View>
  );
}