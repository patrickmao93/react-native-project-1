import {
  ADD_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  DELETE_PLACE,
} from './actionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName,
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    key,
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE,
  };
};
