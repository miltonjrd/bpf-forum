// dependencies
import { ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

// images
import Boneco from '../images/logo.png';
import Glitch from '../images/maxresdefault.jpg';
import FirstSectionBackground from '../images/sitebackground.jpg';
import ForumBackground from '../images/fundo1.png';
import Overlay from '../images/unknown.png';
//import BotaoYT from '../images/site_basebutaoyt.png';

//components
import { ReactComponent as Waves } from '../svg/wave.svg';
import RippleButton from '../components/RippleButton';

const FirstSection = styled.div`
  background: url(${FirstSectionBackground}) center 0 / 100% no-repeat;
  height: 905px;
  width: 100%;
`;

const Section = styled.section`
  background: linear-gradient(to bottom, #f93434, #c12929);
  color: #fff;
  height: 905px;
`;

const BonecoImagem = styled.img`
  transition: transform .2s ease-in-out;
  z-index: 9;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const YoutubeButton = styled.button`
  background: red;
  height: 80px;
  width: 100px;
  border: none;
  border-radius: 1rem;
  transition: transform .2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <main>
      <ParallaxLayer 
        offset={0}
        speed={.5}
        factor={2}
      >
        <FirstSection className="position-relative d-flex justify-content-center align-items-center">
          
          <img 
            className="position-absolute w-100" 
            src={Overlay} 
            alt="" 
            style={{
              height: '905px',
              mixBlendMode: 'plus-lighter',
              pointerEvents: 'none',
              zIndex: 10,
              userSelect: 'none'
            }}
          />
          
          <img 
            className="position-absolute" 
            src={Glitch} 
            alt=""
            style={{
              mixBlendMode: 'color-dodge',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 8
            }}
          />
          <div className='d-flex align-items-center gap-3'>
            <YoutubeButton>

            </YoutubeButton>
            <BonecoImagem src={Boneco} alt="" style={{ userSelect: 'none' }}  />
          </div>
          <Waves className="position-absolute bottom-0" style={{ marginBottom: '-1px', zIndex: 11 }} />
        </FirstSection>
      </ParallaxLayer>
      <Section></Section>
    </main>
  );
};

export default Home;