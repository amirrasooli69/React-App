import React from 'react';

const UserF = ({name , lastName , age , job}) => {
    // const {name , lastName , job , age} = props;
    return (
        <div>
                <p>I am {name} {lastName} and my age is {age}</p>
                <p> my job's {job} </p>
        </div>
    );
};

export default UserF;