import styled, { css } from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import logo from '../public/logo.jpg';




const HeaderContainer = styled.header`
    background-color: #ce181e;
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
        display: none; // Default to not showing the menu on mobile
        ${(props) =>
                props.isMenuOpen &&
                css`
                    display: flex; // Display the menu when it's open
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
    width: 100px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1); // Slightly enlarges the logo on hover
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
            <Logo src={logo} alt="Logo" />
            <nav>
                <NavToggle onClick={() => setIsMenuOpen((prev) => !prev)}>☰</NavToggle>
                <NavList isMenuOpen={isMenuOpen}>
                    <NavItem><Link href="/">Home</Link></NavItem>
                    {/* Add more NavItem components as needed */}
                </NavList>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
