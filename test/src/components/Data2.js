import React , {useContext} from 'react';

import { AgeContex } from '../App';

const Data2 = () => {
    const age = useContext(AgeContex);
    return (
        <div>
            {age}
        </div>
    );
};

export default Data2;