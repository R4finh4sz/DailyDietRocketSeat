import {StatisticCard} from '@/src/Components/StatisticsCard';
import theme from '@/src/theme';
import {ArrowLeft} from 'phosphor-react-native';
import React from 'react';
import {
  BackButton,
  CardRow,
  Content,
  Header,
  PercentageText,
  ScreenContainer,
  SubtitleText,
  Title,
} from './styles';
import {router} from 'expo-router';

const StatisticsScreen = () => {
  const percentage = 90.86;
  const isDietPositive = percentage >= 50;

  return (
    <ScreenContainer>
      <Header
        bgColor={
          isDietPositive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
        }>
        <BackButton onPress={router.back}>
          <ArrowLeft
            size={24}
            color={
              isDietPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
            }
          />
        </BackButton>
        <PercentageText>
          {percentage.toFixed(2).replace('.', ',')}%
        </PercentageText>
        <SubtitleText>das refeições dentro da dieta</SubtitleText>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticCard
          number={22}
          label="melhor sequência de pratos dentro da dieta"
          color={''}
          width={''}
        />

        <StatisticCard
          number={109}
          label="refeições registradas"
          color={''}
          width={''}
        />

        <CardRow>
          <StatisticCard
            width="half"
            number={99}
            label="refeições dentro da dieta"
            color={theme.COLORS.GREEN_LIGHT}
          />

          <StatisticCard
            width="half"
            number={10}
            label="refeições fora da dieta"
            color={theme.COLORS.RED_LIGHT}
          />
        </CardRow>
      </Content>
    </ScreenContainer>
  );
};

export default StatisticsScreen;
