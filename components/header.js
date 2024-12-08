import styled, { css } from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';

const HeaderContainer = styled.header`
    background-color: #ce181e;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
                props.isOpen &&
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
    height: 50Px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1); // Slightly enlarges the logo on hover
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

    return (
        <HeaderContainer>
            <Logo src="/logo.jpg" alt="Logo" />
            <nav>
                 <NavList>
                    <NavItem><Link href="/">Home</Link></NavItem>
                    <NavItem><Link href="/product">Product</Link></NavItem>

                </NavList>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
