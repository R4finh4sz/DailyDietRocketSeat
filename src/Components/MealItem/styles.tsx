import styled from 'styled-components/native';

interface StatusIndicatorProps {
  status: 'within' | 'outside';
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  margin: 0 24px 8px 24px;
  background-color: #FAFAFA;
  border: 1px solid #DDDEDF;
  border-radius: 6px;
`;

export const TimeText = styled.Text`
  color: #1B1D1E;
  font-size: 12px;
  font-weight: bold;
  margin-right: 12px;
`;

export const Separator = styled.Text`
  color: #C4C4CC;
  margin-right: 12px;
`;

export const MealText = styled.Text`
  color: #333638;
  font-size: 16px;
  flex: 1;
`;

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${props => props.status === 'within' ? '#CBE4B4' : '#F4E6E7'};
`;