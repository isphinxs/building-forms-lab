import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  renderBands = () => {
    // debugger;
    return this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
  }
  render() {
    return(
      <div>
        <h3>BandsContainer</h3>
        <BandInput addBand={formData => this.props.addBand(formData)} />
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({
      type: 'ADD_BAND',
      payload: formData
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
