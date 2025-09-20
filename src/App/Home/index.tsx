import React from 'react';
import { ScrollView } from 'react-native';
import { Container, RefeicoesTile } from './styles';
import { Header } from '@/src/Components/Header';
import { PercentCard } from '@/src/Components/PercentCard';
import { NewMealButton } from '@/src/Components/NewMealButton';
import { MealSection } from '@/src/Components/MealSection';
import { useRouter } from 'expo-router';
import { mockData } from '@/Mocks/MockDataListaComida';

export default function HomeScreen() {
  const router = useRouter();

  const handlePercentCardPress = () => {
    router.push('Statistics');
  };

  const handleNewMealPress = () => {
    router.push('/NewMeal');
  };

  return (
  <ScrollView showsVerticalScrollIndicator={false} bounces={false} overScrollMode='never' style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
    <Container>
      <Header />
      <PercentCard 
        percentage="90,86%" 
        onPress={handlePercentCardPress}
      />
      
      <RefeicoesTile>Refeições</RefeicoesTile>
      <NewMealButton onPress={handleNewMealPress} />
      

        {mockData.map((section, index) => (
          <MealSection 
            key={`${section.date}-${index}`}
            date={section.date}
            meals={section.meals}
          />
        ))}
  
    </Container>
        </ScrollView>
  );
}