import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: 295,
    alignItems: 'center',
  },
  year: {
    marginVertical: 8,
  },
  poster: {
    width: 220,
    height: 295,
  },
  titleStyle: {
    fontSize: 12,
  },
  descriptionStyle: {
    fontSize: 16,
  },
});

export const Content = styled.View`
  background: #fff;
  width: 100%;
  padding: 12px;
`;
