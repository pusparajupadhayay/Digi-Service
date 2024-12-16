import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react'; // Import useState for state management
import Link from 'next/link';

const HeaderContainer = styled.header`
    background-color: #ce181e;
    color: #fff;
    padding-top: 12px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    box-sizing: border-box;
`;

const MainContent = styled.main`
    padding-top: 80px;
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
        ${({ $isMenuOpen }) =>
                $isMenuOpen &&
                css`
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

const NavImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle;
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

    // Toggle the menu visibility when the button is clicked
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <>
            <HeaderContainer>
                <Logo src="/logo.png" alt="Logo" />

                <nav>
                    <NavToggle onClick={toggleMenu}>☰</NavToggle> {/* Menu toggle button */}

                    <NavList $isMenuOpen={isMenuOpen}>
                        <NavItem>
                            <Link href="/">
                                <NavImage src="/home.png" alt="Home" />
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/">
                                <NavImage src="/box.png" alt="Product" />
                                Product
                            </Link>
                        </NavItem>
                    </NavList>
                </nav>
            </HeaderContainer>
            <MainContent>
                {/* Your main content here */}
            </MainContent>
        </>
    );
};

export default Header;
