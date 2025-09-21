import theme from '@/src/theme';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.COLORS.WHITE};
`;

export const Header = styled.View<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  padding: 50px;
  padding-top: 56px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const PercentageText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_1};
`;

export const SubtitleText = styled.Text`
  font-size: 14px;
  color: ${theme.COLORS.GRAY_2};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_1};
  margin-bottom: 24px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
