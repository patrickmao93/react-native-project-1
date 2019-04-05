import React from 'react';
import {
  Modal,
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  deleteButton: {
    alignItems: 'center',
  },
});

const PlaceDetail = props => {
  const { selectedPlace, onClose, onDelete } = props;

  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.image} source={selectedPlace.imageSource} />
        <Text style={styles.placeName}>{selectedPlace.placeName}</Text>
      </View>
    );
  }

  const deletePlaceHandler = () => {
    onDelete(selectedPlace.key);
    onClose();
  };

  return (
    <Modal
      onRequestClose={onClose}
      visible={selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          {/* <Button title="Delete" color="red" onPress={deletePlaceHandler} /> */}
          <TouchableOpacity onPress={deletePlaceHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

PlaceDetail.defaultProps = {
  selectedPlace: {
    imageSource: null,
    placeName: '',
  },
};

PlaceDetail.propTypes = {
  selectedPlace: PropTypes.shape({
    imageSource: PropTypes.object,
    placeName: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PlaceDetail;
