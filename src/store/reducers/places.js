import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          placeName: action.placeName,
          imageSource: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/250px-Bachalpsee_reflection.jpg',
          },
        }),
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key
        ),
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.key),
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };

    default:
      return state;
  }
};
