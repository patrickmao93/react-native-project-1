import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const List = props => {
  const { items, onItemDelete } = props;
  return (
    <View style={styles.list}>
      {items.map((place, i) => (
        <ListItem
          key={i}
          placeName={place}
          onItemPress={() => onItemDelete(i)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export default List;
