// import dependencies
import styled from 'styled-components';

//import components
import RippleButton from './RippleButton';

//import images
import BPFLogo from '../images/bpflogo.png';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  background: transparent;
  height: 80px;
  width: 100%;
  z-index: 1000;

`;

const Logo = styled.img`
  height: 75px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className='d-flex justify-content-between container'>
        <Logo src={BPFLogo} />
        <RippleButton title="Entrar" style={{ alignSelf: 'center' }} />
      </div>
    </StyledHeader>
  );
};

export default Header;