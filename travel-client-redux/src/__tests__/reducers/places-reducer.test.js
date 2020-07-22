import placesReducer from '../../reducers/places-reducer';

describe ('placesReducer', () => {
  const defaultState = {
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
});