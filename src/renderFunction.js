import React from 'react';

import TopBar from './components/TopBar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function renderFunction(response) {
  const { body, params, data } = response
  const Body = body ? body : NotFound;
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
