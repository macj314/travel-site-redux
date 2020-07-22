import placesReducer from '../../reducers/places-reducer';
import * as c from './../../actions/ActionTypes';

describe('placesReducer', () => {

  let action;
  
  const defaultState = {
    isLoading: false,
    places: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    places: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(placesReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        places: [],
        error: null
      }
    );
  });

  test('requesting places should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_PLACES
    };

    expect(placesReducer(defaultState, action)).toEqual({
        isLoading: true,
        places: [],
        error: null
    });
  });

  test('successfully getting places should change isLoading to false and update places', () => {
    const places = "A place";
    action = {
      type: c.GET_PLACES_SUCCESS,
      places
    };

    expect(placesReducer(loadingState, action)).toEqual({
        isLoading: false,
        places: "A place",
        error: null
    });
  });

  test('failing to get places should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_PLACES_FAILURE,
      error
    };

    expect(placesReducer(loadingState, action)).toEqual({
        isLoading: false,
        places: [],
        error: "An error"
    });
  });
});