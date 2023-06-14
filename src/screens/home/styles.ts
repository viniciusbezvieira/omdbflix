import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  search: {
    backgroundColor: '#EAEAEA',
    marginVertical: 8,
  },
  TitleCardTouchableHighlight: {
    width: Dimensions.get('window').width / 2 - 12,
    height: Dimensions.get('window').width / 2 + 75,
  },
  TitleCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export const GridDivisor = styled.View`
  height: 8px;
`;
