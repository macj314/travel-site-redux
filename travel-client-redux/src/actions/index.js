import * as a from './../actions/ActionTypes';

export const requestPlaces = () => ({
  type: a.REQUEST_PLACES
})

export const getPlacesSuccess = (places) => ({
  type: a.GET_PLACES_SUCCESS,
  places
});

export const getPlacesFailure = (error) => ({
  type: a.GET_PLACES_FAILURE,
  error
});


export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestPlaces);
    return fetch('http://localhost:5004/api/Places', {
      authorization: {"Bearer Token": `${process.env.BEARER_TOKEN}`}
    })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getPlacesSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getPlacesFailure(error));
      });
  }
}