import React , {useState} from 'react';
import Logger from './components/Logger';

const App = () => {
  const [isShown , setIsShown] = useState(false);

  return (
    <div>
        {isShown && <Logger />}

    </div>
  );
};

export default App;
