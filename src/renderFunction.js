import React from 'react';

import TopBar from './components/TopBar';
import Footer from './components/Footer';

function renderFunction(response) {
  const { body:Body, params, data } = response
  return (
    <div>
      <TopBar />
      <div className='main'>
        <Body params={params} data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default renderFunction;
