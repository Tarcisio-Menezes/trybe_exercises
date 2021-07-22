import React from 'react';
import ISSContext from './ISSContext';
import getCurrentISSLocation from '../services/issAPI';


class ISSProvider extends React.Component {
  constructor(){
    super();

    this.state = {
      latitude: -14.6279,
      longitude: -57.507,
      erro: null,
      isLoading: false
    }

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleISSLocationSuccess = this.handleISSLocationSuccess.bind(this);
    this.handleISSLocationError = this.handleISSLocationError.bind(this);
  }

  handleISSLocationSuccess(response){
    const {iss_position: {latitude, longitude } } = response;

    this.setState({
      isLoading: false,
      latitude,
      longitude,
    })
  }

  handleISSLocationError(response){
    this.setState({
      isLoading: false,
      erro: response.message
    })
  }

  async fetchISSLocation(){
    this.setState({isLoading: true});

    try {
      const response = await getCurrentISSLocation()
      this.handleISSLocationSuccess(response)
    } catch (error) {
      this.handleISSLocationError(error)
    }
  }
  
  render(){
      const { children } = this.props;
    return (
      <ISSContext.Provider value={ { ...this.state, fetchISSLocation: this.fetchISSLocation } }>
         { children }
      </ISSContext.Provider>
    );
  }
}


export default ISSProvider;