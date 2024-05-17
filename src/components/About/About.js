import React from 'react';

const About = ({info}) => {
    return (
        <div>
            <h1>{info.title}</h1>
            <h2>{info.body}</h2>
        </div>
    );
};

export default About;