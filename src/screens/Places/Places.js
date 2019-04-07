import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import List from '../../components/List/List';
import ListInput from '../../components/ListInput/ListInput';
import PlaceDetail from '../../components/PlaceDetail/PlaceDetail';

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});

const Places = props => {
  const { addPlace, deletePlace, selectPlace, deselectPlace } = props;
  const { places, selectedPlace } = props;
  return (
    <View style={styles.listContainer}>
      <PlaceDetail
        selectedPlace={selectedPlace}
        onClose={deselectPlace}
        onDelete={deletePlace}
      />
      <ListInput onSubmit={addPlace} />
      <List items={places} onItemSelect={selectPlace} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

export default connect(
  mapStateToProps,
  {
    addPlace: actions.addPlace,
    deletePlace: actions.deletePlace,
    selectPlace: actions.selectPlace,
    deselectPlace: actions.deselectPlace,
  }
)(Places);
