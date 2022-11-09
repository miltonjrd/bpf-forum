import { useState } from 'react';

import styled from "styled-components";

const Button = styled.button`
  position: relative;
  background: #d81415;
  color: #fff;
  border: none;
  border-radius: .25rem;
  padding: .25rem 1rem;
  overflow: hidden;

  & .ripple {
    position: absolute;
    background: #ffffff75;
    border-radius: 50%;
    animation: ripple 300ms linear;
    transform: scale(0);

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  }
`;

const RippleButton = ({ title, disabled, style, className, onClick }) => {
  const [ripple, setRipple] = useState(null);

  const handleClick = evt => {
    evt.stopPropagation();

    if (ripple) {
      ripple.remove();
      setRipple(null);
    }

    const btn = evt.currentTarget;
    const circle = document.createElement('div');
    
    const diameter = Math.max(btn.clientHeight, btn.clientWidth);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = (evt.clientX - (btn.offsetLeft + radius)) + 'px';
    circle.style.top = (evt.clientY - (btn.offsetTop + radius)) + 'px';

    circle.classList.add('ripple');
    setRipple(circle);
    btn.appendChild(circle);

    //onClick && onClick();
  };

  return (
    <Button 
      className={className}
      onClick={handleClick} 
      disabled={disabled} 
      style={style}
    >
      {title}
    </Button>
  );
};

export default RippleButton;