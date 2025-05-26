import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import Content from './components/Content';
import FooterBlurb from './components/FooterBlurb';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="page">
      <Header />
      <Feature />
      <Content />
      <FooterBlurb />
      <Footer />
    </div>
  );
};

export default App;
