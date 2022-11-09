import styled from "styled-components";
import RippleButton from "../components/RippleButton";

//import images
import BPFLogo from '../images/bpflogo.png';
import ImageOne from '../images/mulher.png';

const Section = styled.section`
  height: 1000px;
`;

const LogoImage = styled.img`
  width: 450px;
  filter: drop-shadow(0 0 3rem #d81415);
  user-select: none;
`;

const ImageContainer = styled.div`
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    display: block;
    background: url(${ImageOne}) -500px -390px / 2000px no-repeat;
    width: 100%;
    height: 1000px;
    opacity: .25;
    z-index: -1;
    animation: anim-bg 2.5s ease-out;

    @keyframes anim-bg {
      0% {
        background-position: -800px -390px;
      }

      100% {
        background-position: -500px -390px;
      }
    }
  }

  img {
    animation: anim-img 1s ease-out;

    @keyframes anim-img {
      from {
        transform: translateX(-350px);
      }

      to {
        transform: translateX(0);
      }
    }
  }
`;

const Home = () => {
  return (
    <main className="h-100">
      <Section className="position-relative d-flex flex-column align-items-center overflow-hidden text-white">
        <LogoImage className="mt-5" src={BPFLogo} alt="" />
        <h1 className="fw-bold shadow" style={{ textShadow: '0 .25rem .5rem #000' }}>Seja bem vindo</h1>
        <h3>
          Mensagens boas vindas
        </h3>
        <h5 className="mt-5">Não conhece o Brasil Play Fácil?</h5>
        <RippleButton 
          className="mt-3"
          title="Conheça-nos agora!" 
          style={{ 
            fontSize: '1.25rem',
            boxShadow: '0 0 .5rem red',
          }} 
          onClick={() => {
            window.open('samp://viado:7777');
          }}
        />
        <ImageContainer className="position-absolute end-0 w-100">
          <img 
            src={ImageOne} 
            alt=""
            style={{ 
              width: '500px', 
              marginLeft: '-60px',
              filter: 'drop-shadow(0 3rem 1.5rem #00000075)'
            }} 
          />
        </ImageContainer>
      </Section>
    </main>
  );
};

export default Home;