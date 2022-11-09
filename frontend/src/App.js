import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

//images
import Background from './images/fundo1.png';

// components
import Header from './components/Header';
import Home from './pages/Home';

import './app.scss';

function App() {
  return (
    <Parallax pages={1.45}>
      <ParallaxLayer 
        offset={0}
        speed={.5}
        factor={2}
      >
        <div 
          className="position-fixed top-0 w-100" 
          style={{ 
            background: `url(${Background}) no-repeat`, 
            height: '1860px', 
            zIndex: -1 
          }} 
        />
      </ParallaxLayer>
      <Header />
      <Home />
    </Parallax>
  );
}

export default App;
