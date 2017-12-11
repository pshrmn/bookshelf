import React from 'react';

import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';

function renderFunction(response) {
  const { body:Body, params, data } = response
  return (
    <div>
      <TopBar />
      <main>
        <Body params={params} data={data} />
      </main>
      <Footer />
    </div>
  );
}

export default renderFunction;
