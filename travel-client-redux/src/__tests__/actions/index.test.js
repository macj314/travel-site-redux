import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('place reducer actions', () => {
  it('requestPlaces should create REQUEST_PLACES action', () => {
    expect(actions.requestPlaces()).toEqual({
      type: c.REQUEST_PLACES
    });
  });

  it('getPlacesSuccess should create GET_PLACES_SUCCESS action', () => {
    const places = "A place";
    expect(actions.getPlacesSuccess(places)).toEqual({
      type: c.GET_PLACES_SUCCESS,
      places
    });
  });

  it('getPlacesFailure should create GET_PLACES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getPlacesFailure(error)).toEqual({
      type: c.GET_PLACES_FAILURE,
      error
    });
  });
});