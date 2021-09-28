import React from 'react';

const Country = (props) => {
    console.log(props)
    return (
        <div>
            <h4>This is:{props.name}</h4>
            <p>capital is: {props.capital} population: {props.population}</p>

        </div>

    );
};

export default Country;