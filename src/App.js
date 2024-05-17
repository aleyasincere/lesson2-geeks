import React from 'react';

const Title = () => {
    return (
        <div>
            title
        </div>
    );
};


const Header = () => {
  return (
      <div>
        Header
          <Title />
      </div>
  );
};


const Content = () => {
  return (
      <div>
        Content
          <Title/>
      </div>
  );
};


const Footer = () => {
  return (
      <div>
          Footer
         <Title/>
      </div>
  );
};



const App = () => {
    return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
    );
};

export default App;