import React from 'react';
import { TouchableHighlight, Image, Dimensions } from 'react-native';

const TitleCard = ({ data, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Image
      style={{
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2 + 75,
      }}
      source={{
        uri:
          data.Poster === 'N/A'
            ? 'https://placehold.co/200x275/404040/9f9f9f.png?text=No+Poster'
            : data.Poster,
      }}
    />
  </TouchableHighlight>
);

export default TitleCard;
