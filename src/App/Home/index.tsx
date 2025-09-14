import React from 'react';
import { ScrollView } from 'react-native';
import { Container, RefeicoesTile } from './styles';
import { Header } from '@/src/Components/Header';
import { PercentCard } from '@/src/Components/PercentCard';
import { NewMealButton } from '@/src/Components/NewMealButton';
import { MealSection } from '@/src/Components/MealSection';
import { useRouter } from 'expo-router';

const mockData = [
  {
    date: '12.08.22',
    meals: [
      { id: '1', time: '20:00', name: 'X-tudo', status: 'outside' as const },
      { id: '2', time: '16:00', name: 'Whey protein com leite', status: 'within' as const },
      { id: '3', time: '12:30', name: 'Salada cesar com frango...', status: 'within' as const },
      { id: '4', time: '09:30', name: 'Vitamina de banana com...', status: 'within' as const }
    ]
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const handlePercentCardPress = () => {
    router.push('/statistics');
  };

  const handleNewMealPress = () => {
    router.push('/new-meal');
  };

  return (
    <Container>
      <Header />
      <PercentCard 
        percentage="90,86%" 
        onPress={handlePercentCardPress}
      />
      
      <RefeicoesTile>Refeições</RefeicoesTile>
      <NewMealButton onPress={handleNewMealPress} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockData.map((section, index) => (
          <MealSection 
            key={`${section.date}-${index}`}
            date={section.date}
            meals={section.meals}
          />
        ))}
      </ScrollView>
    </Container>
  );
}