import { createContext } from 'react';
const contextValue = {
    latitude: -14.6279,
    longitude: -57.507,
    erro: null,
    isLoading: false
  }

const ISSContext = createContext(contextValue)

export default ISSContext;