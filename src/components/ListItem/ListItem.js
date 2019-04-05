import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 3,
  },
});

const ListItem = props => {
  const { onItemPress, placeName, imageSource } = props;

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View style={styles.listItem}>
        <Image style={styles.image} source={imageSource} />
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  imageSource: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
};

export default ListItem;
