import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NavToggle = styled.button`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderContainer>
            <nav>
                <NavToggle onClick={() => setIsMenuOpen((prev) => !prev)}>☰</NavToggle>
                <NavList isMenuOpen={isMenuOpen}>
                    <NavItem><Link href="/">Home</Link></NavItem>
                    <NavItem><Link href="/about">About</Link></NavItem>
                    <NavItem><Link href="/services">Services</Link></NavItem>
                    <NavItem><Link href="/contact">Contact</Link></NavItem>
                </NavList>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
