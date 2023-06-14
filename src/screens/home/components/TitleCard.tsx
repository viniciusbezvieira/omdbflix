import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { TitleList } from '../../../services/movies/types';
import { styles } from '../styles';

type Props = {
  index: number;
  data: TitleList;
  onPress: any;
};

const TitleCard: React.FC<Props> = ({ index, data, onPress }: Props) => (
  <TouchableHighlight
    onPress={onPress}
    style={{
      ...{ marginHorizontal: index % 2 !== 0 ? 0 : 8 },
      ...styles.TitleCardTouchableHighlight,
    }}>
    <Image
      source={{
        uri:
          data.Poster === 'N/A'
            ? 'https://placehold.co/200x275/404040/9f9f9f.png?text=No+Poster'
            : data.Poster,
      }}
      style={styles.TitleCardImage}
    />
  </TouchableHighlight>
);

export default TitleCard;
