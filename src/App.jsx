import React, { useState } from 'react';
import WomenFashionWebsite from './components/WomenFashionWebsite';
import Error404Page from './components/Error404Page';
import JumpGame from './components/JumpGame';
import MWebWebsite from './components/MWebWebsite';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home, 404, game, mweb

  return (
    <div>
      {currentPage === 'home' && <WomenFashionWebsite />}
      {currentPage === '404' && <Error404Page />}
      {currentPage === 'game' && <JumpGame />}
      {currentPage === 'mweb' && <MWebWebsite />}
    </div>
  );
}

export default App;
