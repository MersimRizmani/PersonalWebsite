import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(76, 175, 79, 0);
  height: 100;
  width: 30vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
  
  a {
    font-size: 12pt;
    font-family: Comfortaa;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
  }

  a img {
    margin-left: 60px;
    margin-bottom: -30px;
    margin-top: -85px;
    height: 80px;
    width: 80px;
  }
`;