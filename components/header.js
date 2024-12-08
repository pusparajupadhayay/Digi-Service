import styled, { css } from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const HeaderContainer = styled.header`
    background-color: #ce181e;
    color: #fff;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    padding-right: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -10px -10px -1px -10px;
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
        display: none;
        ${({ isMenuOpen }) => isMenuOpen && css`
            display: flex;
        `}
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

const Logo = styled.img`
    width: 200px;
    height: 40px;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(2.2);
    }
`;

const NavToggle = styled.button`
    display: none;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer>
            <Logo src="/logo.png" alt="Logo" />
            <NavToggle onClick={toggleMenu}>
                ☰
            </NavToggle>
            <nav>
                <NavList isMenuOpen={isMenuOpen}>
                    <NavItem><Link href="/">Home</Link></NavItem>
                    <NavItem><Link href="/product">Product</Link></NavItem>
                </NavList>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
