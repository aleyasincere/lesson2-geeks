import React from 'react';
import Title from "../../components/Title/Title";
import About from "../../components/About/About";

const MainPage = () => {
    return (
        <div>
            <Title title={'Hello World!'}/>
            <About info={{title: "Some Title", body:"Some body"}}/>
        </div>
    );
};

export default MainPage;