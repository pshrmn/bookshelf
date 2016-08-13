import React from 'react';

import TopBar from 'components/TopBar';
import Footer from 'components/Footer';

export default function App(props) {
  return (
    <div>
      <TopBar />
      <div className='main'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
