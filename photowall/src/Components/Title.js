import React from 'react';

function Title(props) {
    const title = props.title;
    const element = <h1>{title}</h1>;
    return element;
}

export default Title;