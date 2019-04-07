import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  list: {
    width: '90%',
  },
});

const List = props => {
  const { items, onItemSelect } = props;
  return (
    <View style={styles.list}>
      {items.map(item => (
        <ListItem
          key={item.key}
          placeName={item.placeName}
          onItemPress={() => onItemSelect(item.key)}
          imageSource={item.imageSource}
        />
      ))}
    </View>
  );
};

List.defaultProps = {
  items: [],
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemSelect: PropTypes.func.isRequired,
};

export default List;
