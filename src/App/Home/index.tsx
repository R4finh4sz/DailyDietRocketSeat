import React from 'react';
import {ScrollView, View} from 'react-native';
import {Container, RefeicoesTile} from './styles';
import {Header} from '@/src/Components/Header';
import {PercentCard} from '@/src/Components/PercentCard';
import {Button} from '@/src/Components/Button';
import {MealSection} from '@/src/Components/MealSection';
import {useRouter} from 'expo-router';
import {mockData} from '@/Mocks/MockDataListaComida';

export default function HomeScreen() {
  const router = useRouter();

  const handlePercentCardPress = () => {
    router.push('Statistics');
  };

  const handleNewMealPress = () => {
    router.push('/NewMeal');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      overScrollMode="never"
      style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <Container>
        <Header />
        <PercentCard percentage="90,86%" onPress={handlePercentCardPress} />

        <RefeicoesTile>Refeições</RefeicoesTile>
        <View style={{paddingHorizontal: 24}}>
          <Button
            onPress={() => router.push('/NewMeal')}
            backgroundColor="#1B1D1E"
            textColor="#FAFAFA"
            iconName="plus"
            width="100%"
            iconSize={18}>
            Nova refeição
          </Button>
        </View>

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
