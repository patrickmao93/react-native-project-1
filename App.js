import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from './src/components/List/List';
import ListInput from './src/components/ListInput/ListInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import * as actions from './src/store/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  listContainer: {
    width: '100%',
  },
});

const App = props => {
  const { addPlace, selectPlace, deletePlace, deselectPlace } = props;
  const { places, selectedPlace } = props;
  return (
    <View style={styles.container}>
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

App.defaultProps = {
  selectedPlace: null,
};

App.propTypes = {
  addPlace: PropTypes.func.isRequired,
  selectPlace: PropTypes.func.isRequired,
  deletePlace: PropTypes.func.isRequired,
  deselectPlace: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPlace: PropTypes.shape({
    key: PropTypes.number,
    placeName: PropTypes.string,
    imageSource: PropTypes.object,
  }),
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
    selectPlace: actions.selectPlace,
    deletePlace: actions.deletePlace,
    deselectPlace: actions.deselectPlace,
  }
)(App);
