import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';

class Places extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, places } = this.props;
    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h2>List of Places</h2>
          <ol>
            {places.map((place, index) =>
              <li key={index}>
                <h3>{place.city}</h3>
                <h3>{place.country}</h3>
                <p>{place.description}</p>
              </li>
            )}
          </ol>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    places: state.places,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Places);