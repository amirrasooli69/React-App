import React from 'react';
import Data2 from './components/Data2'

export const AgeContex = React.createContext();
const App = () => {
  
  return (
    <div>
      <AgeContex.Provider value={31}>
        
        <Data2 />
      </AgeContex.Provider>
    </div>
  );
};

export default App;
